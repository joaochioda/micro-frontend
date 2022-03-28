_Personal project micro-frontends_

**Commands used to create root**

`create-single-spa`
`root-single-spa`
`single-spa root config`

---

`create-single-spa`
`single-spa-aplication`

`npm run build:webpack`
`generates folder dist`
`copy name of react-app-react-app.js and paste in index importmap (root)`
`http-server . --cors ( to host react application)`

---

angular
`create-single-spa`
`npm i`
`npm run build:single-spa:angular-app`
`angular-app/dist/angular-app/`

---

Create production mode spa

`npm run build:webpack`
`discomment <!-- <script type="systemjs-importmap" src="/importmap.json"></script> -->`
`at dist, create file called importmap.json and past the lines systemjs-importmap`
