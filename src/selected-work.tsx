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
    console: "Wooden Entryway Console",
    consoleDescription: "A compact wooden console with a concealed compartment for keys, integrated shoe storage and a metal frame.",
    consoleHero: "Hand sketch of a wooden console with shoe storage",
    concept: "AI-assisted visualization",
    sketch: "Original hand sketch",
    interiors: "Interior styling",
    apartment: "Berezniaky Rental Apartment",
    apartmentDescription: "I prepared this Kyiv apartment for rental in 2019 by refreshing the existing furniture with textiles, lighting and decor. I had designed the kitchen during an earlier renovation. These are archival photos of the actual apartment.",
    before: "Before styling",
    after: "Ready for rental",
    kitchen: "Completed kitchen",
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
    console: "Дерев’яна консоль для передпокою",
    consoleDescription: "Компактна дерев’яна консоль із прихованим відділенням для ключів, місцем для взуття та металевим каркасом.",
    consoleHero: "Ручний ескіз дерев’яної консолі з місцем для взуття",
    concept: "Візуалізація за допомогою ШІ",
    sketch: "Авторський ескіз",
    interiors: "Стилістика інтер’єру",
    apartment: "Квартира під оренду на Березняках",
    apartmentDescription: "У 2019 році я підготувала київську квартиру до оренди й освіжила простір текстилем, світлом і декором. Кухню спроєктувала під час попереднього ремонту. Тут показані архівні фото реальної квартири.",
    before: "До оновлення",
    after: "Готова до оренди",
    kitchen: "Реалізована кухня",
    videos: "Відео про перетворення кімнати",
    videosDescription: "Два короткі відео показують, як можна по-різному оновити одну спальню. Запропоновані зміни показані на концептуальних візуалізаціях, створених за допомогою ШІ.",
    olive: "Спальня в теплих оливкових тонах",
    oliveDescription: "Оливкові стіни, відтінки горіха та кілька джерел світла змінюють настрій кімнати зі збереженням основних предметів.",
    budget: "Оновлення спальні з малим бюджетом",
    budgetDescription: "Легке оновлення зі збереженням шпалер і більшості меблів.",
    videoFallback: "Відкрити відео",
  },
} as const;

type Photo = { file: string; alt: string; caption?: string };

export function SelectedWork({ language, asset }: {
  language: keyof typeof labels;
  asset: (path: string) => string;
}) {
  const t = labels[language];
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
      details: [{ file: "floral-table-detail", alt: t.tableDetail, caption: t.tableDetail }],
    },
    {
      id: "wooden-console", title: t.console, description: t.consoleDescription,
      main: { file: "wood-entry-console", alt: t.consoleHero, caption: t.sketch },
      details: [],
    },
  ];
  const rooms = [
    { file: "berezniaky-before", alt: t.before },
    { file: "berezniaky-after", alt: t.after },
    { file: "berezniaky-kitchen", alt: t.kitchen },
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
              <figure className="object-cover">
                <img src={asset(`${images}${project.main.file}.webp`)} alt={project.main.alt} loading="lazy" />
                <figcaption>{project.main.caption}</figcaption>
              </figure>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.details.length > 0 && (
                <div className="object-details">
                  {project.details.map((photo) => (
                    <figure key={photo.file}>
                      <a href={asset(`${images}${photo.file}.webp`)} target="_blank" rel="noreferrer">
                        <img src={asset(`${images}${photo.file}.webp`)} alt={photo.alt} loading="lazy" />
                      </a>
                      <figcaption>{photo.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
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
              <figure key={photo.file}>
                <img src={asset(`${images}${photo.file}.webp`)} alt={photo.alt} loading="lazy" />
                <figcaption>{photo.alt}</figcaption>
              </figure>
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
    </>
  );
}
