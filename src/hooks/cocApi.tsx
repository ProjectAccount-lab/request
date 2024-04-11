import { useState } from "react"

export interface Clan {


    badgeUrls: string
    capitalLeague: string
    chatLanguage: string
    clanBuilderBasePoints: string
    clanCapital: string
    clanCapitalPoints: string
    clanLevel: string
    clanPoints: string
    description: string
    isFamilyFriendly: string
    isWarLogPublic: string
    location: string
    memberList: []
    members: string
    name: string
    requiredBuilderBaseTrophies: string
    requiredTownhallLevel: string
    requiredTrophies: string
    tag: string
    type: string
    warFrequency: string
    warLeague: string
    warLosses: string
    warTies: string
    warWinStreak: string
    warWins: string
}




export interface Member {
    clanRank: number
    donations: number
    donationsReceived: number
    expLevel: number
    league: string
    name: string
    role: string
    tag: string
    townHallLevel: number
    trophies: number
}


export const cocApi = () => {
    let cocUrl = "https://api.clashofclans.com/v1/clans/%232lrrvpuly/members"
    let url = "data/que_miras_bobo_json.json"
    let apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNjNjdkMDY1LTZhYzUtNDY2OS04MzkwLTEyMWQ0YjVjNDNmOCIsImlhdCI6MTcxMjY1ODIyMSwic3ViIjoiZGV2ZWxvcGVyLzQ3YWNkYWM0LWEzYTAtZDJjMi0yMWI1LWE4MjgwYzI3YjJlZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjkzLjcxLjIyNS4yMjgiXSwidHlwZSI6ImNsaWVudCJ9XX0.7UQRdwWLvt_030Ug_c6hwXvwNOngc74nDKoLQy2qgj7GQd0-tTKROkllSCKLJtomB7tReeXzSeSn9JkzSvqZJQ"



    const clanData = async (): Promise<Clan[]> => {
        const result = await fetch(`${cocUrl}`, {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        })
        return result.json()
    }

    const memberList = async (): Promise<Member[]> => {
        const result = await fetch(`${url}`)
        return result.json()
    }

    const getSingleMEmber = async (_clanRank: any): Promise<Member[]>=>{
        const result = await fetch(`${url}`)
        return result.json()


    }



    return {
        clanData,
        memberList,
        getSingleMEmber
     


    }
}

export default cocApi