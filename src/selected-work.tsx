import { useRef, useState } from "react";
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
    concept: "AI-assisted visualization",
    sketch: "Original hand sketch",
    interiors: "Interior styling",
    apartment: "Berezniaky Rental Apartment",
    apartmentDescription: "I prepared this Kyiv apartment for rental in 2019 by refreshing the existing furniture with textiles, lighting and decor. I had designed the kitchen during an earlier renovation. These are archival photos of the actual apartment.",
    before: "Before styling",
    after: "Ready for rental",
    kitchen: "Completed kitchen",
    kitchenDrawing: "Kitchen cabinet drawing with dimensions",
    diningNook: "Dining nook set for two",
    candlelight: "Candlelight detail",
    decorDetail: "Candle and framed artwork",
    enlarge: "Enlarge image",
    viewer: "Image preview",
    close: "Close image",
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
    concept: "Візуалізація за допомогою ШІ",
    sketch: "Авторський ескіз",
    interiors: "Стилістика інтер’єру",
    apartment: "Квартира під оренду на Березняках",
    apartmentDescription: "У 2019 році я підготувала київську квартиру до оренди й освіжила простір текстилем, світлом і декором. Кухню спроєктувала під час попереднього ремонту. Тут показані архівні фото реальної квартири.",
    before: "До оновлення",
    after: "Готова до оренди",
    kitchen: "Реалізована кухня",
    kitchenDrawing: "Креслення кухонних меблів із розмірами",
    diningNook: "Обідній куточок із сервіруванням на двох",
    candlelight: "Свічки крупним планом",
    decorDetail: "Свічка та графіка в рамі",
    enlarge: "Збільшити зображення",
    viewer: "Перегляд зображення",
    close: "Закрити зображення",
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

function GalleryPhoto({ photo, url, buttonLabel, onOpen, className }: {
  photo: Photo;
  url: string;
  buttonLabel: string;
  onOpen: (photo: Photo, button: HTMLButtonElement) => void;
  className?: string;
}) {
  return (
    <figure className={className}>
      <button
        className="gallery-photo-button"
        type="button"
        aria-label={`${buttonLabel} — ${photo.alt}`}
        aria-haspopup="dialog"
        onClick={(event) => onOpen(photo, event.currentTarget)}
      >
        <img src={url} alt={photo.alt} loading="lazy" />
        <span className="gallery-photo-icon" aria-hidden="true">+</span>
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
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const photoUrl = (photo: Photo) => asset(`${images}${photo.file}.webp`);

  function openPhoto(photo: Photo, button: HTMLButtonElement) {
    opener.current = button;
    setSelectedPhoto(photo);
    viewer.current?.showModal();
  }

  function resetViewer() {
    setSelectedPhoto(null);
    opener.current?.focus({ preventScroll: true });
  }

  const objects: { id: string; title: string; description: string; main: Photo; details: Photo[] }[] = [
    {
      id: "lamp", title: t.lamp, description: t.lampDescription,
      main: { file: "table-lamp-room", alt: t.lampHero, caption: t.concept },
      details: [
        { file: "table-lamp-object", alt: t.lampObject, caption: t.lampObject },
        { file: "table-lamp-sketch", alt: t.lampSketch, caption: t.sketch },
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
  ];
  const rooms: Photo[] = [
    { file: "berezniaky-before", alt: t.before, caption: t.before },
    { file: "berezniaky-after", alt: t.after, caption: t.after },
    { file: "berezniaky-kitchen", alt: t.kitchen, caption: t.kitchen },
  ];
  const roomDetails: Photo[] = [
    { file: "berezniaky-kitchen-drawing", alt: t.kitchenDrawing, caption: t.kitchenDrawing },
    { file: "berezniaky-dining-nook", alt: t.diningNook, caption: t.diningNook },
    { file: "berezniaky-candlelight", alt: t.candlelight, caption: t.candlelight },
    { file: "berezniaky-decor-detail", alt: t.decorDetail, caption: t.decorDetail },
  ];
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
          {objects.map((project) => (
            <article className="object-card" key={project.id} id={project.id}>
              <GalleryPhoto
                className="object-cover"
                photo={project.main}
                url={photoUrl(project.main)}
                buttonLabel={t.enlarge}
                onOpen={openPhoto}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="object-details">
                {project.details.map((photo) => (
                  <GalleryPhoto key={photo.file} photo={photo} url={photoUrl(photo)} buttonLabel={t.enlarge} onOpen={openPhoto} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="selected-work section-shell" id="interiors" aria-labelledby="interiors-title">
        <div className="selected-work-heading">
          <h2 id="interiors-title">{t.interiors}</h2>
        </div>
        <article className="room-case" id="berezniaky">
          <h3>{t.apartment}</h3>
          <p>{t.apartmentDescription}</p>
          <div className="room-gallery">
            {rooms.map((photo) => (
              <GalleryPhoto key={photo.file} photo={photo} url={photoUrl(photo)} buttonLabel={t.enlarge} onOpen={openPhoto} />
            ))}
          </div>
          <div className="room-detail-gallery">
            {roomDetails.map((photo) => (
              <GalleryPhoto key={photo.file} photo={photo} url={photoUrl(photo)} buttonLabel={t.enlarge} onOpen={openPhoto} />
            ))}
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
                  poster={asset(`${images}${clip.file}.webp`)}
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
        onPointerDown={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
      >
        <form method="dialog" className="image-viewer-controls">
          <button type="submit" aria-label={t.close}>×</button>
        </form>
        {selectedPhoto && (
          <figure>
            <img src={photoUrl(selectedPhoto)} alt={selectedPhoto.alt} />
            <figcaption>{selectedPhoto.caption}</figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
