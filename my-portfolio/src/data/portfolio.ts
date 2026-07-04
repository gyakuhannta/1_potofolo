

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

export interface Skill
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
    date:string
}

export interface Work{

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

export interface GameJam
{
    name:string
    date:string
    theme:string
    description:string
    platform:string[]
    role:string
    team:string
    result:string |null
    url:string|null
    reflection:string
}

export type CertStatus = '取得済み' | '受験予定' |'取得予定' |'学習中'

export interface Certification{
    name:string
    date:string
    category:string
    score:string |null
    status:CertStatus
}


export interface TimelineItem{
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
    bio:'「自分の好きが誰かの夢になること」を目指すゲームクリエイターです。チームでの活動をメインで行っていて特にプレイヤー関連のプログラムを担当して、「断罪クッキング」ではインスペクターから降ってくる食材や範囲を調整出来るようにするなどプログラマー以外も設定の把握がしやすいコードを意識しています。それだけにとどまらずマネージャー役も行っていてチームの進捗管理や会議進行なども行っており作業の細分化や意見を纏める事を得意としています。チームで活動する時にアイデアを積極的に出してこのチームに自分がいたから良いゲームが作れたと言われるような働きを意識しています。',
    motto:'「夢は前に進む為の原動力」',
    avatar:null,
    Links:{
        github:'https://github.com/gyakuhannta',
        twitter:'null',
        email:'ktc24a31a0039@edu.kyoto-tech.ac.jp',
    },

}

export const skills: Skill[]=[

{

     name: 'Unity',
    version: '6000.3.8f1',
    level: 70,
    category: 'game',
    capabilities: ['3D/2Dゲーム制作', '', ''],
    note: 'チーム制作で主にプレイヤー操作部分をメインで担当',
},
{
    name:'github',
    version:'github.com/gyakuhannta',
    level:50,
    category:'vsc',
    capabilities:['リポジトリ管理'],
    note:'チーム制作、個人制作で使用',
},
{
    name:'Adobe Premiere Pro 2026',
    version:'動画編集',
    level:30,
    category:'',
    capabilities:[],
    note:'',
},
{
    name:'',
    version:'',
    level:40,
    category:'',
    capabilities:[],
    note:'',
},
]

export const works:Work[]=[
{
    id:1,
    title:'断罪クッキング',
    genre:'2Dタイムアタック',
    thumbnail:null,
    screenshots:[],
    description:'unityで制作したチーム制作作品、初めてプログラマとして参加して主にプレイヤー操作、オブジェクト生成等を担当した。',
    tags:['unity','チーム制作','プログラマ'],
    platform:['windows'],
    period:'4ヶ月',
    team:'プランナー2人、プログラマー３、デザイナー３',
    role:'プレイヤー操作、フルーツの生成、確率の変更',
    github:'ｗ',
    link:null,
    venues:[],
    techpoints:'',
    designNootes:'',
    implementationtheme:'',
    category:'',
    performance:''      
    
}

]
export const gameJams: GameJam[]=[
{
    name:'',
    date:'',
    theme:'',
    description:'',
    platform:[],
    role:'',
    team:'',
   　result:null,
    url:'',
    reflection:''
}
]

export const certifications: Certification[] = [
  {
    name:'',
    date:'',
    category:'',
    score:'',
    status:'取得済み'


  }]

 export const timeline: TimelineItem[] = 
 [
    {
        year:'',
        event:''
    }
 ]