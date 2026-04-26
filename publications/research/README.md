<details open>
<summary>English Version</summary>

# Example: Sectioned bibliography (Canon Horror)

This directory is a reference example for sectioned bibliography mode.

## What this example demonstrates

- usage of `zg_bibliography_sections` in YAML;
- consistency requirements between `zg_bibliography_sections[*].bibliography` and the top-level `bibliography:` list;
- marker-based approach `<!-- ZG_BIBLIOGRAPHY_SECTIONS -->` for controlled post-processing.

## Main file to review

- `01-Язык как заражение - медиальная коммуникация как механизм поражения/01-Язык как заражение - медиальная коммуникация как механизм поражения.md`

## What is verified in this example

- `zg_bibliography_sections` exists in YAML;
- marker `<!-- ZG_BIBLIOGRAPHY_SECTIONS -->` exists in the markdown body.

## Where to inspect structure

- YAML front matter: top section of the main `.md` file;
- marker: end of the main `.md` file;
- bibliography: `Библиография/` subfolders inside the related article directories.

## `build.log` status

`build.log` is not part of the reference contract and is not stored as a normative artifact in this example.

</details>

<details>
<summary>Русская версия</summary>

# Пример: секционная библиография (Canon Horror)

Этот каталог — опорный пример секционного режима библиографии.

## Что демонстрирует пример

- работу `zg_bibliography_sections` в YAML;
- требования к согласованности `zg_bibliography_sections[*].bibliography` и верхнего `bibliography:`;
- marker-подход `<!-- ZG_BIBLIOGRAPHY_SECTIONS -->` для контролируемого post-processing.

## Главный файл для проверки

- `01-Язык как заражение - медиальная коммуникация как механизм поражения/01-Язык как заражение - медиальная коммуникация как механизм поражения.md`

## Что проверено в примере

- в YAML присутствует `zg_bibliography_sections`;
- в теле файла присутствует marker `<!-- ZG_BIBLIOGRAPHY_SECTIONS -->`.

## Где смотреть структуру

- YAML-шапка: верхняя часть основного `.md` файла;
- marker: конец основного `.md` файла;
- библиография: подкаталоги `Библиография/` соответствующих статей.

## Статус build.log

`build.log` не является частью reference-контракта и не хранится в этом примере как нормативный артефакт.

</details>
