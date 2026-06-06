export interface profile{
name:string
nameEn: string
role: string
school: string
department:string
graduationYear:string
bio:string
motto:string | null
avatar:string | null

links:{
    github:string
    twitter:string
    email:string
}

}

export interface skill
{
    name:string
    version:string
    level:number
    category:string
    capabilities:string[]
    note:string|null

}

export interface venue{
    name:string
    data:string
}

export interface work{

    id:number
    title:string
    genre:string
    category:string
    thumbnail:string|null
    screenshots:string[]
    description:string|null
    tags:string[]
    platform:string[]
    period:string
    team:string
    role:string
    github:string|null
    link:string|null
    venues:venue[]
    techpoints:string|null
    designNootes:string|null
    implementationtheme:string|null
    performance:string|null

}

export interface Gamejam
{
    name:string
    date:string
    theme:string
    description:string
    platform:string[]
    role:string
    team:string
    reult:string |null
    url:string|null
    reflection:string
}

export type Certstatus = '取得済み' | '受験予定' |'取得予定' |'学習中'

export interface Certification{
    name:string
    date:string
    category:string
    score:string |null
    status:Certstatus
}


export interface timelineitem{
    year:string
    event:string
}


export const CATEGORY_EMOJI: Record<string,string> ={

    game:'',
    web:'',
    '3d':'',
}

export const CATEGORY_EMOJI_FALLBACK=''

export const profile ={
 
    name: '中村 和雅',
    nameEn: 'nakamura kazumasa',
    role:'',
}