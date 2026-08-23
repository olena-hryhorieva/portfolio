from pathlib import Path
import sys

from pypdf import PdfReader, PdfWriter


def main() -> None:
    if len(sys.argv) != 3:
        raise SystemExit("Usage: sanitize_pdf.py INPUT OUTPUT")

    source = Path(sys.argv[1])
    target = Path(sys.argv[2])
    target.parent.mkdir(parents=True, exist_ok=True)

    reader = PdfReader(source)
    writer = PdfWriter()
    for page in reader.pages:
        writer.add_page(page)

    writer.add_metadata(
        {
            "/Title": "Olena Hryhorieva - Furniture & Object Concept Design Portfolio",
            "/Author": "Olena Hryhorieva",
            "/Subject": "Selected furniture, lighting and human-centered object concepts",
            "/Keywords": "furniture design, object design, concept design, portfolio",
            "/Creator": "Olena Hryhorieva",
        }
    )

    with target.open("wb") as stream:
        writer.write(stream)


if __name__ == "__main__":
    main()
