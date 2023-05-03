import { unmountComponentAtNode } from "react-dom";
import Image from "next/image";
export const date ={

}
let bed = [];
let glary = [] ;
for (let i =1 ; i < 28 ; i++){
  glary.push({
    id : `${i}g`,
    allprice: 0 ,
    name : "sofa" ,
    salery : 120 * i ,
    reted : 5,
    count : 1 ,
    coment: {
      one : 'it is very butteful',
      two : 'it is very butteful',
      three : 'it is very butteful'
    },
    disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum necessitatibus eius consequuntur amet dolore dignissimos totam, obcaecati deleniti nam, magnam minima architecto laborum. Repudiandae saepe amet ab. Mollitia, natus.",
    smalldisc : "sofa and bed",
    imge : `(${i}).jpg`,
    src :require(`/public/img3/prx (${i}).jpg`)
  })
}
for (let i =1 ; i < 23 ; i++){
  bed.push({
    id : `${i}b`,
    allprice:0,
    name : "bed" ,
    salery : 120 * i ,
    count : 1,
    reted : 5,
    coment: {
      one : 'it is very butteful',
      two : 'it is very butteful',
      three : 'it is very butteful'
    },
    disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illum necessitatibus eius consequuntur amet dolore dignissimos totam, obcaecati deleniti nam, magnam minima architecto laborum. Repudiandae saepe amet ab. Mollitia, natus.",
    smalldisc : "sofa and bed",
    imge : `(${i}).jpg`,
    src:require(`/public/chir/proxy (${i}).jpg`)
  })
}


date.glary = glary ;
date.bed = bed ;

const all =[ ...glary , ...bed];
export {all };