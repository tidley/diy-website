# diy-website

Make a responsive website using Excel.

Effects on scrolling and resizing can be applied by adding a section that represents the new page layout. E.g. when a page is moved to mobile layout the menu items might have different classes applied to create the new layout.

Recognised behaviour [implemented]
Hidden hamburger to provide GUI change when made to mobile format for opening navigation item menu [NO]

---

## Home Page

### <HEAD>

title
meta params
stylesheet

### <BODY>

| Item # | Section            | Type   | ID     | Class    | Close      | UID |
| ------ | ------------------ | ------ | ------ | -------- | ---------- | --- |
| 0      | Body               | body   |        |          |            | B-0 |
| 1      | Header             | header | header |          |            | B-1 |
| 2      | Logo               | a      | logo   |          | 2          | B-2 |
| 3      | Nav                | div    | menu   |          |            | B-3 |
| 4      | Nav item container | div    | nav    |          |            | B-4 |
| 5      | Nav sub-item 1     | a      |        | active   | 5          | B-5 |
| 6      | Nav sub-item 2     | a      |        | inactive | 6          | B-6 |
| 7      | Nav sub-item 3     | a      |        | inactive | 7, 4       | B-7 |
| 8      | Nav hamburger      | a      | ham    |          | 8, 3, 1, 0 | B-8 |

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
