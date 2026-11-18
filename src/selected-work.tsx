import { useRef, useState, type TouchEvent } from "react";
import "./selected-work.css";

const images = "images/selected/";

const labels = {
  en: {
    furniture: "Furniture and lighting",
    portfolio: "Download the Home Decor selection (PDF)",
    lamp: "Lace Shade Table Lamp",
    lampDescription: "A bronze-toned base and a lace shade that casts a soft pattern of light. I developed the design from a hand sketch and explored it as a standalone object and in a living room.",
    lampHero: "Lace shade table lamp on a wooden console in a living room",
    lampObject: "Standalone visualization",
    lampSketch: "Original lamp sketch",
    table: "Floral Inlay Dining Table",
    tableDescription: "A sculptural stone-finish table with a floral motif across the base. The dining room scene shows how the table anchors the space.",
    tableHero: "Stone-finish dining table with a floral inlay in a sunlit dining room",
    tableDetail: "Material and floral motif study",
    tableSketch: "Hand sketch of the table with a floral panel",
    tableObject: "Standalone table visualization from two angles",
    standalone: "Standalone visualization",
    wardrobe: "Quiet Gallery Wardrobe",
    wardrobeDescription: "A built-in wardrobe concept for a furniture manufacturer preparing to exhibit in Milan. The brief called for a wardrobe in the style of Poliform. I paired matte graphite fronts with softly lit bronze-glass display bays and developed the layouts, material palette and hardware details.",
    wardrobeFront: "Matte graphite wardrobe doors with two lit display bays",
    wardrobeGlazedWall: "Wardrobe wall with glazed hanging and storage sections",
    wardrobeRoom: "Two wardrobe walls with a central display island",
    wardrobeLayout: "Functional layout for both wardrobe walls",
    wardrobeMaterials: "Material and finish palette",
    wardrobeDownload: "Download the wardrobe concept (PDF, Ukrainian)",
    concept: "AI-assisted visualization",
    sketch: "Original hand sketch",
    interiors: "Interior styling",
    apartment: "Berezniaky Rental Apartment",
    apartmentDescription: "I prepared this Kyiv apartment for rental in 2019 by refreshing the existing furniture with textiles, lighting and decor. I had designed the kitchen during an earlier renovation. These are archival photos of the actual apartment.",
    rentalResult: "Rented on the second viewing at 20% above market rent.",
    before: "Before styling",
    cleared: "Cleared room before staging",
    after: "Ready for rental",
    kitchen: "Completed kitchen",
    kitchenDrawing: "Kitchen cabinet drawing with dimensions",
    diningNook: "Dining nook set for two",
    decorDetail: "Candle and framed artwork",
    candlelight: "Candlelight detail",
    enlarge: "Enlarge image",
    viewer: "Image preview",
    close: "Close image",
    previous: "Previous image",
    next: "Next image",
    videos: "Room makeover videos",
    videosDescription: "Two short videos show different ways to refresh the same bedroom. Both use AI-assisted concept images to illustrate the proposed changes.",
    olive: "Warm Olive Bedroom",
    oliveDescription: "Olive walls, walnut tones and layered lighting set a new direction while retaining key pieces.",
    budget: "Low Budget Bedroom Refresh",
    budgetDescription: "A lighter refresh that keeps the wallpaper and most of the furniture.",
    videoFallback: "Open video",
  },
  uk: {
    furniture: "Меблі та освітлення",
    portfolio: "Завантажити добірку Home Decor (PDF англійською)",
    lamp: "Настільна лампа з мереживним абажуром",
    lampDescription: "Основа бронзового відтінку й мереживний абажур із м’яким світлом. Я розробила лампу від ескізу та показала її окремо й у вітальні.",
    lampHero: "Настільна лампа з мереживним абажуром на дерев’яній консолі у вітальні",
    lampObject: "Предметна візуалізація",
    lampSketch: "Авторський ескіз лампи",
    table: "Обідній стіл із квітковою інкрустацією",
    tableDescription: "Скульптурний стіл із кам’яною фактурою та квітковим мотивом на основі. Візуалізація їдальні показує, як стіл організовує простір.",
    tableHero: "Обідній стіл із квітковою інкрустацією в сонячній їдальні",
    tableDetail: "Фактура матеріалу та квітковий мотив",
    tableSketch: "Ручний ескіз столу з квітковою вставкою",
    tableObject: "Предметна візуалізація столу у двох ракурсах",
    standalone: "Предметна візуалізація",
    wardrobe: "Гардеробна «Тиха галерея»",
    wardrobeDescription: "Концепт вбудованої гардеробної для меблевої фабрики, яка готується до виставки в Мілані. За брифом потрібно було спроєктувати гардеробну в стилі Poliform. Я поєднала матові графітові фасади з м’яко підсвіченими вітринами з бронзового скла та опрацювала конфігурацію, палітру матеріалів і вузли фурнітури.",
    wardrobeFront: "Матові графітові фасади з двома підсвіченими вітринами",
    wardrobeGlazedWall: "Стіна гардеробної із заскленими секціями для одягу та зберігання",
    wardrobeRoom: "Дві стіни гардеробної та центральний острів-вітрина",
    wardrobeLayout: "Функціональна схема обох стін гардеробної",
    wardrobeMaterials: "Палітра матеріалів та оздоблення",
    wardrobeDownload: "Завантажити концепт гардеробної (PDF)",
    concept: "Візуалізація за допомогою ШІ",
    sketch: "Авторський ескіз",
    interiors: "Стилістика інтер’єру",
    apartment: "Квартира під оренду на Березняках",
    apartmentDescription: "У 2019 році я підготувала київську квартиру до оренди й освіжила простір текстилем, світлом і декором. Кухню спроєктувала під час попереднього ремонту. Тут показані архівні фото реальної квартири.",
    rentalResult: "Квартиру здали після другого перегляду за ціною на 20% вищою за ринкову.",
    before: "До оновлення",
    cleared: "Кімната без декору перед підготовкою до оренди",
    after: "Готова до оренди",
    kitchen: "Реалізована кухня",
    kitchenDrawing: "Креслення кухонних меблів із розмірами",
    diningNook: "Обідній куточок із сервіруванням на двох",
    decorDetail: "Свічка та графіка в рамі",
    candlelight: "Свічки крупним планом",
    enlarge: "Збільшити зображення",
    viewer: "Перегляд зображення",
    close: "Закрити зображення",
    previous: "Попереднє зображення",
    next: "Наступне зображення",
    videos: "Відео про перетворення кімнати",
    videosDescription: "Два короткі відео показують, як можна по-різному оновити одну спальню. Запропоновані зміни показані на концептуальних візуалізаціях, створених за допомогою ШІ.",
    olive: "Спальня в теплих оливкових тонах",
    oliveDescription: "Оливкові стіни, відтінки горіха та кілька джерел світла змінюють настрій кімнати зі збереженням основних предметів.",
    budget: "Оновлення спальні з малим бюджетом",
    budgetDescription: "Легке оновлення зі збереженням шпалер і більшості меблів.",
    videoFallback: "Відкрити відео",
  },
} as const;

type Photo = { file: string; alt: string; caption: string };
type GalleryPosition = { photos: readonly Photo[]; index: number };

function GalleryPhoto({ photo, url, buttonLabel, onOpen, className }: {
  photo: Photo;
  url: string;
  buttonLabel: string;
  onOpen: (button: HTMLButtonElement) => void;
  className?: string;
}) {
  return (
    <figure className={className}>
      <button
        className="gallery-photo-button"
        type="button"
        aria-label={`${buttonLabel} — ${photo.alt}`}
        aria-haspopup="dialog"
        onClick={(event) => onOpen(event.currentTarget)}
      >
        <img src={url} alt={photo.alt} loading="lazy" />
        <span className="gallery-photo-icon" aria-hidden="true" />
      </button>
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export function SelectedWork({ language, asset }: {
  language: keyof typeof labels;
  asset: (path: string) => string;
}) {
  const t = labels[language];
  const viewer = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [position, setPosition] = useState<GalleryPosition | null>(null);
  const selectedPhoto = position?.photos[position.index];
  const photoUrl = (photo: Photo) => asset(`${images}${photo.file}.webp`);

  function openPhoto(photos: readonly Photo[], index: number, button: HTMLButtonElement) {
    opener.current = button;
    setPosition({ photos, index });
    viewer.current?.showModal();
  }

  function resetViewer() {
    setPosition(null);
    touchStart.current = null;
    opener.current?.focus({ preventScroll: true });
  }

  function changePhoto(direction: -1 | 1) {
    setPosition((current) => {
      if (!current) return null;
      const count = current.photos.length;
      return { ...current, index: (current.index + direction + count) % count };
    });
  }

  function startSwipe(event: TouchEvent<HTMLImageElement>) {
    const touch = event.touches[0];
    touchStart.current = event.touches.length === 1 ? { x: touch.clientX, y: touch.clientY } : null;
  }

  function endSwipe(event: TouchEvent<HTMLImageElement>) {
    const start = touchStart.current;
    touchStart.current = null;
    const end = event.changedTouches[0];
    if (!start || !end) return;
    const dx = end.clientX - start.x;
    const dy = end.clientY - start.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) {
      changePhoto(dx < 0 ? 1 : -1);
    }
  }

  function renderPhoto(photos: readonly Photo[], index: number, className?: string) {
    const photo = photos[index];
    return (
      <GalleryPhoto
        key={photo.file}
        className={className}
        photo={photo}
        url={photoUrl(photo)}
        buttonLabel={t.enlarge}
        onOpen={(button) => openPhoto(photos, index, button)}
      />
    );
  }

  const objects: {
    id: string;
    title: string;
    description: string;
    main: Photo;
    details: Photo[];
    download?: { path: string; label: string };
  }[] = [
    {
      id: "lamp", title: t.lamp, description: t.lampDescription,
      main: { file: "table-lamp-room", alt: t.lampHero, caption: t.concept },
      details: [
        { file: "table-lamp-sketch", alt: t.lampSketch, caption: t.sketch },
        { file: "table-lamp-object", alt: t.lampObject, caption: t.lampObject },
      ],
    },
    {
      id: "dining-table", title: t.table, description: t.tableDescription,
      main: { file: "floral-dining-table", alt: t.tableHero, caption: t.concept },
      details: [
        { file: "floral-table-sketch", alt: t.tableSketch, caption: t.sketch },
        { file: "floral-table-object", alt: t.tableObject, caption: t.standalone },
        { file: "floral-table-detail", alt: t.tableDetail, caption: t.tableDetail },
      ],
    },
    {
      id: "wardrobe", title: t.wardrobe, description: t.wardrobeDescription,
      main: { file: "quiet-gallery-front", alt: t.wardrobeFront, caption: t.concept },
      details: [
        { file: "quiet-gallery-glazed-wall", alt: t.wardrobeGlazedWall, caption: t.wardrobeGlazedWall },
        { file: "quiet-gallery-room", alt: t.wardrobeRoom, caption: t.wardrobeRoom },
        { file: "quiet-gallery-layout", alt: t.wardrobeLayout, caption: t.wardrobeLayout },
        { file: "quiet-gallery-materials", alt: t.wardrobeMaterials, caption: t.wardrobeMaterials },
      ],
      download: {
        path: "files/olena-hryhorieva-quiet-gallery-wardrobe.pdf",
        label: t.wardrobeDownload,
      },
    },
  ];
  const rooms: Photo[] = [
    { file: "berezniaky-before", alt: t.before, caption: t.before },
    { file: "berezniaky-cleared", alt: t.cleared, caption: t.cleared },
    { file: "berezniaky-after", alt: t.after, caption: t.after },
  ];
  const roomDetails: Photo[] = [
    { file: "berezniaky-kitchen", alt: t.kitchen, caption: t.kitchen },
    { file: "berezniaky-kitchen-drawing", alt: t.kitchenDrawing, caption: t.kitchenDrawing },
    { file: "berezniaky-dining-nook", alt: t.diningNook, caption: t.diningNook },
    { file: "berezniaky-decor-detail", alt: t.decorDetail, caption: t.decorDetail },
    { file: "berezniaky-candlelight", alt: t.candlelight, caption: t.candlelight },
  ];
  const apartmentPhotos = [...rooms, ...roomDetails];
  const videos = [
    { file: "warm-olive-interior", title: t.olive, description: t.oliveDescription },
    { file: "low-budget-interior", title: t.budget, description: t.budgetDescription },
  ];

  return (
    <>
      <section className="selected-work section-shell" id="home-decor" aria-labelledby="home-decor-title">
        <div className="selected-work-heading">
          <h2 id="home-decor-title">{t.furniture}</h2>
          <a className="small-link" href={asset("files/olena-hryhorieva-home-decor-selection.pdf")} download>
            {t.portfolio} <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="object-gallery">
          {objects.map((project) => {
            const photos = [project.main, ...project.details];
            return (
              <article className="object-card" key={project.id} id={project.id}>
                {renderPhoto(photos, 0, "object-cover")}
                <div className="object-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.download && (
                    <a className="small-link object-download" href={asset(project.download.path)} download>
                      {project.download.label} <span aria-hidden="true">↓</span>
                    </a>
                  )}
                </div>
                <div className="object-details">
                  {project.details.map((_, index) => renderPhoto(photos, index + 1))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="selected-work section-shell" id="interiors" aria-labelledby="interiors-title">
        <div className="selected-work-heading">
          <h2 id="interiors-title">{t.interiors}</h2>
        </div>
        <article className="room-case" id="berezniaky">
          <h3>{t.apartment}</h3>
          <p>{t.apartmentDescription}</p>
          <p className="room-result">{t.rentalResult}</p>
          <div className="room-gallery">
            {rooms.map((_, index) => renderPhoto(apartmentPhotos, index))}
          </div>
          <div className="room-detail-gallery">
            {roomDetails.map((_, index) => renderPhoto(apartmentPhotos, rooms.length + index))}
          </div>
        </article>
        <div className="video-section" id="makeover-videos">
          <h3>{t.videos}</h3>
          <p>{t.videosDescription}</p>
          <div className="video-gallery">
            {videos.map((clip) => (
              <article className="video-card" key={clip.file}>
                {/* eslint-disable-next-line jsx-a11y/media-has-caption -- Both videos have burned-in English captions. */}
                <video
                  aria-label={clip.title}
                  controls
                  playsInline
                  preload="none"
                  poster={asset(`${images}${clip.file}-cover.webp`)}
                >
                  <source src={asset(`videos/${clip.file}.mp4`)} type="video/mp4" />
                  <a href={asset(`videos/${clip.file}.mp4`)}>{t.videoFallback}</a>
                </video>
                <h4>{clip.title}</h4>
                <p>{clip.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <dialog
        ref={viewer}
        className="image-viewer"
        aria-label={t.viewer}
        onClose={resetViewer}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            changePhoto(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        onPointerDown={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <div className="image-viewer-controls">
          <button className="image-viewer-button" type="button" aria-label={t.close} onClick={() => viewer.current?.close()}>×</button>
        </div>
        {position && selectedPhoto && (
          <figure>
            <div className="image-viewer-stage">
              <img
                src={photoUrl(selectedPhoto)}
                alt={selectedPhoto.alt}
                draggable={false}
                onTouchStart={startSwipe}
                onTouchEnd={endSwipe}
                onTouchCancel={() => { touchStart.current = null; }}
              />
              <button className="image-viewer-button image-viewer-previous" type="button" aria-label={t.previous} onClick={() => changePhoto(-1)}>←</button>
              <button className="image-viewer-button image-viewer-next" type="button" aria-label={t.next} onClick={() => changePhoto(1)}>→</button>
            </div>
            <figcaption className="image-viewer-caption" aria-live="polite">
              {selectedPhoto.caption}
              <small>{position.index + 1} / {position.photos.length}</small>
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
