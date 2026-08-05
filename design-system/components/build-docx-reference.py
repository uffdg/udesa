#!/usr/bin/env python3
"""
Construye design-system/components/docx-reference.docx a partir del
reference.docx default de pandoc, aplicando los tokens del design-system
(BRAND #502BD8, INK #222222, MUTED #6E6E6E, BG_LIGHT #F8F8F8, BORDER
#EDEDED) a los estilos Normal / Heading1-3 / BlockText / Table / Hyperlink
/ Verbatim, vía edición directa de word/styles.xml y word/theme/theme1.xml
(python-docx no expone edición de tblStylePr / theme fonts).
"""
import re
import shutil
import subprocess
import tempfile
import zipfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
SRC = Path(tempfile.gettempdir()) / "docx-reference-base.docx"
WORKDIR = Path(tempfile.gettempdir()) / "docx-ref-build"
OUT = HERE / "docx-reference.docx"

BRAND = "502BD8"
INK = "222222"
MUTED = "6E6E6E"
BG_LIGHT = "F8F8F8"
BORDER = "EDEDED"
WHITE = "FFFFFF"
FONT = "Arial"  # ver docx-guion.md: por qué Arial y no Inter acá

def replace_style(xml: str, style_id: str, new_block: str) -> str:
    marker = f'w:styleId="{style_id}"'
    idx = xml.index(marker)
    start = xml.rindex("<w:style", 0, idx)
    end = xml.index("</w:style>", idx) + len("</w:style>")
    assert xml[start:end].count("<w:style") == 1, style_id
    return xml[:start] + new_block + xml[end:]


def main():
    subprocess.run(
        ["pandoc", "-o", str(SRC), "--print-default-data-file", "reference.docx"],
        check=True,
    )

    if WORKDIR.exists():
        shutil.rmtree(WORKDIR)
    WORKDIR.mkdir(parents=True)
    with zipfile.ZipFile(SRC) as z:
        z.extractall(WORKDIR)

    styles_path = WORKDIR / "word" / "styles.xml"
    xml = styles_path.read_text(encoding="utf-8")

    # docDefaults: 11pt base en vez de 12pt
    xml = xml.replace(
        '<w:sz w:val="24" />\n        <w:szCs w:val="24" />',
        '<w:sz w:val="22" />\n        <w:szCs w:val="22" />',
    )

    # --- Normal ---
    xml = replace_style(
        xml,
        "Normal",
        f'''<w:style w:type="paragraph" w:default="1" w:styleId="Normal">
    <w:name w:val="Normal" />
    <w:qFormat />
    <w:pPr>
      <w:spacing w:after="160" w:line="288" w:lineRule="auto" />
    </w:pPr>
    <w:rPr>
      <w:rFonts w:ascii="{FONT}" w:hAnsi="{FONT}" w:cs="{FONT}" />
      <w:color w:val="{INK}" />
      <w:sz w:val="22" />
      <w:szCs w:val="22" />
    </w:rPr>
  </w:style>''',
    )

    # --- Heading1 ---
    xml = replace_style(
        xml,
        "Heading1",
        f'''<w:style w:type="paragraph" w:styleId="Heading1">
    <w:name w:val="heading 1" />
    <w:basedOn w:val="Normal" />
    <w:next w:val="BodyText" />
    <w:link w:val="Heading1Char" />
    <w:uiPriority w:val="9" />
    <w:qFormat />
    <w:pPr>
      <w:keepNext />
      <w:keepLines />
      <w:pBdr>
        <w:bottom w:val="single" w:sz="6" w:space="8" w:color="{BORDER}" />
      </w:pBdr>
      <w:spacing w:before="480" w:after="240" />
      <w:outlineLvl w:val="0" />
    </w:pPr>
    <w:rPr>
      <w:rFonts w:ascii="{FONT}" w:hAnsi="{FONT}" w:cs="{FONT}" />
      <w:b />
      <w:bCs />
      <w:color w:val="{BRAND}" />
      <w:sz w:val="48" />
      <w:szCs w:val="48" />
    </w:rPr>
  </w:style>''',
    )

    # --- Heading2 ---
    xml = replace_style(
        xml,
        "Heading2",
        f'''<w:style w:type="paragraph" w:styleId="Heading2">
    <w:name w:val="heading 2" />
    <w:basedOn w:val="Normal" />
    <w:next w:val="BodyText" />
    <w:link w:val="Heading2Char" />
    <w:uiPriority w:val="9" />
    <w:qFormat />
    <w:pPr>
      <w:keepNext />
      <w:keepLines />
      <w:pBdr>
        <w:left w:val="single" w:sz="24" w:space="8" w:color="{BRAND}" />
      </w:pBdr>
      <w:spacing w:before="360" w:after="120" />
      <w:outlineLvl w:val="1" />
    </w:pPr>
    <w:rPr>
      <w:rFonts w:ascii="{FONT}" w:hAnsi="{FONT}" w:cs="{FONT}" />
      <w:b />
      <w:bCs />
      <w:color w:val="{INK}" />
      <w:sz w:val="30" />
      <w:szCs w:val="30" />
    </w:rPr>
  </w:style>''',
    )

    # --- Heading3 (no usado en guion.md hoy, pero disponible: "kicker" mayuscula) ---
    xml = replace_style(
        xml,
        "Heading3",
        f'''<w:style w:type="paragraph" w:styleId="Heading3">
    <w:name w:val="heading 3" />
    <w:basedOn w:val="Normal" />
    <w:next w:val="BodyText" />
    <w:link w:val="Heading3Char" />
    <w:uiPriority w:val="9" />
    <w:qFormat />
    <w:pPr>
      <w:keepNext />
      <w:keepLines />
      <w:spacing w:before="240" w:after="80" />
      <w:outlineLvl w:val="2" />
    </w:pPr>
    <w:rPr>
      <w:rFonts w:ascii="{FONT}" w:hAnsi="{FONT}" w:cs="{FONT}" />
      <w:b />
      <w:bCs />
      <w:caps />
      <w:color w:val="{BRAND}" />
      <w:spacing w:val="10" />
      <w:sz w:val="20" />
      <w:szCs w:val="20" />
    </w:rPr>
  </w:style>''',
    )

    # --- BlockText (blockquotes de guion.md) ---
    xml = replace_style(
        xml,
        "BlockText",
        f'''<w:style w:type="paragraph" w:styleId="BlockText">
    <w:name w:val="Block Text" />
    <w:basedOn w:val="BodyText" />
    <w:next w:val="BodyText" />
    <w:uiPriority w:val="9" />
    <w:unhideWhenUsed />
    <w:qFormat />
    <w:pPr>
      <w:pBdr>
        <w:left w:val="single" w:sz="16" w:space="12" w:color="{BRAND}" />
      </w:pBdr>
      <w:spacing w:before="120" w:after="120" />
      <w:ind w:firstLine="0" w:left="240" w:right="240" />
    </w:pPr>
    <w:rPr>
      <w:rFonts w:ascii="{FONT}" w:hAnsi="{FONT}" w:cs="{FONT}" />
      <w:i />
      <w:iCs />
      <w:color w:val="{MUTED}" />
    </w:rPr>
  </w:style>''',
    )

    # --- VerbatimChar (código inline: `entregable/business-plan-coto.md`) ---
    xml = replace_style(
        xml,
        "VerbatimChar",
        f'''<w:style w:type="character" w:customStyle="1" w:styleId="VerbatimChar">
    <w:name w:val="Verbatim Char" />
    <w:basedOn w:val="BodyTextChar" />
    <w:rPr>
      <w:rFonts w:ascii="Courier New" w:hAnsi="Courier New" w:cs="Courier New" />
      <w:color w:val="{BRAND}" />
      <w:shd w:val="clear" w:color="auto" w:fill="{BG_LIGHT}" />
      <w:sz w:val="21" />
    </w:rPr>
  </w:style>''',
    )

    # --- Hyperlink ---
    xml = replace_style(
        xml,
        "Hyperlink",
        f'''<w:style w:type="character" w:styleId="Hyperlink">
    <w:name w:val="Hyperlink" />
    <w:basedOn w:val="BodyTextChar" />
    <w:rPr>
      <w:color w:val="{BRAND}" />
      <w:u w:val="single" />
    </w:rPr>
  </w:style>''',
    )

    # --- TOCHeading: hereda de Heading1 (BRAND, bold, regla inferior) ---
    xml = replace_style(
        xml,
        "TOCHeading",
        f'''<w:style w:type="paragraph" w:styleId="TOCHeading">
    <w:name w:val="TOC Heading" />
    <w:basedOn w:val="Heading1" />
    <w:next w:val="BodyText" />
    <w:uiPriority w:val="39" />
    <w:unhideWhenUsed />
    <w:qFormat />
    <w:pPr>
      <w:spacing w:before="240" w:line="259" w:lineRule="auto" />
      <w:outlineLvl w:val="9" />
    </w:pPr>
  </w:style>''',
    )

    # --- Title / Subtitle (no usados en guion.md hoy; estilizados por consistencia) ---
    xml = re.sub(
        r'(<w:style w:type="paragraph" w:styleId="Title">.*?<w:rPr>)(.*?)(</w:rPr>\s*</w:style>)',
        lambda m: m.group(1)
        + f'''
      <w:rFonts w:ascii="{FONT}" w:hAnsi="{FONT}" w:cs="{FONT}" />
      <w:b />
      <w:color w:val="{BRAND}" />
      <w:spacing w:val="0" />
      <w:sz w:val="64" />
      <w:szCs w:val="64" />
    '''
        + m.group(3),
        xml,
        count=1,
        flags=re.S,
    )
    xml = re.sub(
        r'(<w:style w:type="paragraph" w:styleId="Subtitle">.*?<w:rPr>)(.*?)(</w:rPr>\s*</w:style>)',
        lambda m: m.group(1)
        + f'''
      <w:rFonts w:ascii="{FONT}" w:hAnsi="{FONT}" w:cs="{FONT}" />
      <w:color w:val="{MUTED}" />
      <w:spacing w:val="0" />
      <w:sz w:val="26" />
      <w:szCs w:val="26" />
    '''
        + m.group(3),
        xml,
        count=1,
        flags=re.S,
    )

    # --- Table (estilo default de cualquier tabla, incl. las de guion.md) ---
    xml = replace_style(
        xml,
        "Table",
        f'''<w:style w:type="table" w:default="1" w:styleId="Table">
    <w:name w:val="Table" />
    <w:basedOn w:val="TableNormal" />
    <w:uiPriority w:val="59" />
    <w:qFormat />
    <w:tblPr>
      <w:tblInd w:w="0" w:type="dxa" />
      <w:tblBorders>
        <w:top w:val="single" w:sz="4" w:space="0" w:color="{BORDER}" />
        <w:left w:val="single" w:sz="4" w:space="0" w:color="{BORDER}" />
        <w:bottom w:val="single" w:sz="4" w:space="0" w:color="{BORDER}" />
        <w:right w:val="single" w:sz="4" w:space="0" w:color="{BORDER}" />
        <w:insideH w:val="single" w:sz="4" w:space="0" w:color="{BORDER}" />
        <w:insideV w:val="single" w:sz="4" w:space="0" w:color="{BORDER}" />
      </w:tblBorders>
      <w:tblCellMar>
        <w:top w:w="100" w:type="dxa" />
        <w:left w:w="120" w:type="dxa" />
        <w:bottom w:w="100" w:type="dxa" />
        <w:right w:w="120" w:type="dxa" />
      </w:tblCellMar>
    </w:tblPr>
    <w:tblStylePr w:type="firstRow">
      <w:rPr>
        <w:rFonts w:ascii="{FONT}" w:hAnsi="{FONT}" w:cs="{FONT}" />
        <w:b />
        <w:bCs />
        <w:color w:val="{WHITE}" />
      </w:rPr>
      <w:tcPr>
        <w:tcBorders>
          <w:bottom w:val="single" w:sz="4" w:space="0" w:color="{INK}" />
        </w:tcBorders>
        <w:shd w:val="clear" w:color="auto" w:fill="{INK}" />
        <w:vAlign w:val="center" />
      </w:tcPr>
    </w:tblStylePr>
    <w:tblStylePr w:type="band1Horz">
      <w:tcPr>
        <w:shd w:val="clear" w:color="auto" w:fill="{BG_LIGHT}" />
      </w:tcPr>
    </w:tblStylePr>
  </w:style>''',
    )

    styles_path.write_text(xml, encoding="utf-8")

    # --- theme1.xml: tipografía Arial (major/minor) + accent1/hlink en BRAND ---
    theme_path = WORKDIR / "word" / "theme" / "theme1.xml"
    theme_xml = theme_path.read_text(encoding="utf-8")
    theme_xml = theme_xml.replace(
        '<a:latin typeface="Aptos Display" panose="02110004020202020204"/>',
        f'<a:latin typeface="{FONT}" panose="020B0604020202020204"/>',
    )
    theme_xml = theme_xml.replace(
        '<a:latin typeface="Aptos" panose="02110004020202020204"/>',
        f'<a:latin typeface="{FONT}" panose="020B0604020202020204"/>',
    )
    theme_xml = theme_xml.replace(
        "<a:accent1>\n        <a:srgbClr val=\"156082\"/>\n      </a:accent1>",
        f'<a:accent1>\n        <a:srgbClr val="{BRAND}"/>\n      </a:accent1>',
    )
    theme_xml = theme_xml.replace(
        "<a:hlink>\n        <a:srgbClr val=\"467886\"/>\n      </a:hlink>",
        f'<a:hlink>\n        <a:srgbClr val="{BRAND}"/>\n      </a:hlink>',
    )
    theme_path.write_text(theme_xml, encoding="utf-8")

    # --- rezip como .docx ---
    if OUT.exists():
        OUT.unlink()
    with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as zf:
        for f in sorted(WORKDIR.rglob("*")):
            if f.is_file():
                zf.write(f, f.relative_to(WORKDIR))

    print("OK ->", OUT)


if __name__ == "__main__":
    main()
