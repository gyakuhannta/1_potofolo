import { Link, Links } from "react-router-dom"

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
    role:'game creator',
    school:'京都デザイン&テクノロジー専門学校',
    department:'スーパーゲームクリエイター専攻',
    graduationYear:'2028年3月卒業見込み',
    bio:'「自分の好きが誰かの夢になること」を目指すゲームプログラマーです。チームでの活動をメインで行っていて特にプレイヤー関連のプログラムを担当して、「断罪クッキング」ではインスペクターから降ってくる食材や範囲を調整出来るようにするなどプログラマー以外も設定の把握がしやすいコードを意識しています。それだけにとどまらずマネージャー役も行っていてチームの進捗管理や会議進行なども行っており作業の細分化や意見を纏める事を得意としています。チームで活動する時にアイデアを積極的に出してこのチームに自分がいたから良いゲームが作れたと言われるような働きを意識しています。',
    motto:'「夢は前に進む為の原動力」',
    avatar:null,
    Links:{
        github:'https://github.com/gyakuhannta',
        twitter:'null',
        email:'ktc24a31a0039@edu.kyoto-tech.ac.jp',
    },

}

export const skills: skill[]=[

{

     name: 'Unity',
    version: '6000.3.8f1',
    level: 70,
    category: 'game',
    capabilities: ['3D/2Dゲーム制作', '', ''],
    note: 'チーム制作で主にプレイヤー操作部分をメインで担当',
},
{
    name:'',
    version:'',
    level:70,
    category:'',
    capabilities:[],
    note:'',
},
]
