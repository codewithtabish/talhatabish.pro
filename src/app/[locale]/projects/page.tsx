import React from 'react'

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;  return (
    <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem praesentium, tempora consequuntur, itaque repellendus nesciunt suscipit maiores excepturi in animi libero neque optio necessitatibus possimus numquam reprehenderit fuga dolor.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem praesentium, tempora consequuntur, itaque repellendus nesciunt suscipit maiores excepturi in animi libero neque optio necessitatibus possimus numquam reprehenderit fuga dolor.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem praesentium, tempora consequuntur, itaque repellendus nesciunt suscipit maiores excepturi in animi libero neque optio necessitatibus possimus numquam reprehenderit fuga dolor.
      
    </div>
  )
}

