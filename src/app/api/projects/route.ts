import { getProjects } from "@/actions/projects";
import { redis } from "@/lib/redis";
import { RedisKeys } from "@/utils/redis-key";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const locale = "en";

    // 1. Delete all keys related to projects
    const allKeys = await redis.keys("projects:all:*");
    const slugKeys = await redis.keys("projects:slug:*:*");
    const keysToDelete = [...allKeys, ...slugKeys];

    if (keysToDelete.length > 0) {
      await redis.del(...keysToDelete);
      console.log(`[Redis] Deleted ${keysToDelete.length} project-related keys`);
    }

    // 2. Re-fetch updated project list from Strapi
    const { data: enProjects, error } = await getProjects(locale);

    if (error) {
      console.error("❌ Failed to fetch projects:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    // 3. Store updated project list in Redis
    await redis.set(
      RedisKeys.withLocale(RedisKeys.ALL_PROJECTS, locale),
      enProjects
    );

    // 4. Cache each project individually
    for (const project of enProjects) {
      await redis.set(
        RedisKeys.PROJECT_BY_SLUG(project.slug, locale),
        project
      );
    }

    return NextResponse.json({
      message: "✅ Redis updated with latest projects.",
      count: enProjects.length,
    });
  } catch (err: any) {
    console.error("❌ WEBHOOK_ERROR:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
