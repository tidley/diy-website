# diy-website

Make a responsive website using Excel.

Effects on scrolling and resizing can be applied by adding a section that represents the new page layout. E.g. when a page is moved to mobile layout the menu items might have different classes applied to create the new layout.

Recognised behaviour [implemented]
Hidden hamburger to provide GUI change when made to mobile format for opening navigation item menu [NO]

---

## Home Page

### HEAD

title
meta params
stylesheet

### BODY

| Item # | Section            | Type   | ID     | Class    | Close |
| ------ | ------------------ | ------ | ------ | -------- | ----- |
| 1      | Header             | header | header |          |       |
| 2      | Logo               | a      | logo   |          | 2     |
| 3      | Nav                | div    | menu   |          |       |
| 4      | Nav item container | div    | nav    |          |       |
| 5      | Nav sub-item 1     | a      |        | active   | 5     |
| 6      | Nav sub-item 2     | a      |        | inactive | 6     |
| 7      | Nav sub-item 3     | a      |        | inactive | 7, 3  |
| 8      | Nav hamburger      | a      | ham    |          | 8, 4  |
