import localFont from 'next/font/local'

const DolceVitaHeavy =localFont({
    src:[
        {
            path:"../app/font/DolceVitaHeavy-Bold.woff",
            
        }
    ],
    variable:"--font-dolceVitaHeavy"
})

export {DolceVitaHeavy}