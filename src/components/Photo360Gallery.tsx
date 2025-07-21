import dynamic from 'next/dynamic'
import React from 'react'

// Dynamically import the 360 viewer to disable SSR which would otherwise break because of the `window` dependency
const ReactPhotoSphereViewer = dynamic(
  async () => {
    const mod = await import('react-photo-sphere-viewer')
    // The library exports the component as a named export
    return mod.ReactPhotoSphereViewer
  },
  { ssr: false }
)

type GalleryItem = {
  src: string
  label: string
}

interface Photo360GalleryProps {
  items?: GalleryItem[]
}

/**
 * A horizontally-scrollable collection of interactive 360° images.
 * Each viewer is fully zoomable & pannable thanks to Photo-Sphere-Viewer.
 */
const Photo360Gallery: React.FC<Photo360GalleryProps> = ({ items }) => {
  // Provide default demo images when no `items` prop is supplied
  const defaultItems: GalleryItem[] = Array.from({ length: 7 }).map((_, idx) => ({
    src: `/photo360-${idx + 1}.jpg`,
    label: `Photo ${idx + 1}`,
  }))

  const gallery = items ?? defaultItems

  return (
    <div className="mt-16">
      <h3 className="text-white text-lg font-semibold mb-4">Galeri 360°</h3>
      <div className="w-full overflow-x-auto pb-4 scrollbar-hide touch-action-pan-x">
        <div className="flex gap-6 min-w-max snap-x snap-mandatory">
          {gallery.map(({ src, label }, i) => (
            <div
              key={i}
              className="shrink-0 w-[300px] md:w-[380px] snap-center flex flex-col items-center"
            >
              <div className="w-full h-64 bg-zinc-800 rounded-lg overflow-hidden shadow-md">
                {/* @ts-ignore – the dynamic import returns a valid React component */}
                <ReactPhotoSphereViewer
                  src={src}
                  height="100%"
                  width="100%"
                  containerClass="!h-full" // ensure it fills the parent
                  littlePlanet={false}
                  hideNavbarButton
                  navbar={['zoom', 'fullscreen']}
                />
              </div>
              <span className="mt-2 text-sm text-zinc-300">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Photo360Gallery