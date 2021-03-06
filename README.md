# diy-website

Make a responsive website using Excel.

Effects on scrolling and resizing can be applied by adding a section that represents the new page layout. E.g. when a page is moved to mobile layout the menu items might have different classes applied to create the new layout.

## Functions

1. Write index page
    1. Build .html
        1. Sections
            1. Title
            1. Menu items
            1. Hidden hamburger
            1. Headings
                - Main
                - Section-1
            1. Content
            1. Footer
        1. Variables
        1. Functions
    1. Build .css
        1.
    1. Build .js
    1. Build API [0]
        - https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values#dimension

---

## Home Page

### <HEAD>

| Item # | Section       | Type          | ID  | Class | Close | UID   |
| ------ | ------------- | ------------- | --- | ----- | ----- | ----- |
| 0      | Document type | !DOCTYPE html |     |       | 0     | H.0   |
| 1      | Html          | html          |     |       |       | H.1   |
| 2      | Head          | head          |     |       |       | H.2   |
| 3      | Title         | title         |     |       | 3     | H.3   |
| 4      | Viewport      | meta          |     |       |       | H.4.1 |
| 5      | Content Type  | meta          |     |       | 5     | H.4.2 |
| 6      | Description   | meta          |     |       | 6     | H.4.3 |
| 7      | Keywords      | meta          |     |       | 7     | H.4.4 |
| 8      | CSS           | link          |     |       |       | H.8   |

### <BODY>

| Item # | Section            | Type   | ID     | Class    | Close      | UID                   |
| ------ | ------------------ | ------ | ------ | -------- | ---------- | --------------------- |
| 0      | Body               | body   |        |          |            | B.0                   |
| 1      | Header             | header | header |          |            | B.1                   |
| 2      | Logo               | a      | logo   |          | 2          | B.2                   |
| 3      | Nav                | div    | menu   |          |            | B.3                   |
| 4      | Nav item container | div    | nav    |          |            | B.4                   |
| 5      | Nav sub-item 1     | a      |        | active   | 5          | B.5.1                 |
| 6      | Nav sub-item 2     | a      |        | inactive | 6          | B.5.2                 |
| 7      | Nav sub-item 3     | a      |        | inactive | 7, 4       | B.5.3.B.4.0           |
| 8      | Nav hamburger      | a      | ham    |          | 8, 3, 1, 0 | B.6.B.3.0.B.1.0.B.0.0 |

---

# SCRIPT

| Item # | Section  | Type | ID  | Class | Close |
| ------ | -------- | ---- | --- | ----- | ----- |
| 0      | Script 1 | body |     |       |       |

## main.scss

@import 'reset';
@import 'vars';

### body

font-family: \$font-family;
min-width: 350px;

| Section                                                         |     |
| --------------------------------------------------------------- | --- |
| body                                                            |     |
| #header                                                         |     |
| #header a                                                       |     |
| #header #logo                                                   |     |
| #nav a                                                          |     |
| a:hover:not(#logo):not(#ham)                                    |     |
| #nav a.active                                                   |     |
| #nav                                                            |     |
| #ham                                                            |     |
| .visible                                                        |     |
| @media screen and (max-width: 620px) #header                    |     |
| @media screen and (max-width: 620px) #header #logo              |     |
| @media screen and (max-width: 620px) #header #ham               |     |
| @media screen and (max-width: 620px) #header a                  |     |
| @media screen and (max-width: 620px) #nav a.inactive:not(.show) |     |
| @media screen and (max-width: 620px) #nav                       |     |
| @media screen and (max-width: 620px) #menu                      |     |
| section                                                         |     |
| #banner                                                         |     |
| #one                                                            |     |
| .odd                                                            |     |
| .even                                                           |     |
| .container                                                      |     |
| footer                                                          |     |
