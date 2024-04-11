import { IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonPage, IonSearchbar, IonSelect, IonSelectOption, IonTitle, IonToolbar, useIonAlert, useIonLoading, useIonViewWillEnter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import useApi, { SearchResult, SearchType } from '../hooks/useApi';
import cocApi, { Clan, Member } from '../hooks/cocApi';
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { IonModalCustomEvent, OverlayEventDetail } from '@ionic/core/components'
const Tab1: React.FC = () => {

  const [results, setResults] = useState<Member[]>([]);
  const [presentAlert] = useIonAlert();
  const [loading, setLoading ] = useState<boolean>(true)
  const [users, setUsers] = useState<any[]>([])



  let url = "data/que_miras_bobo_json.json"


  const { clanData, memberList } = cocApi()


  const modal = useRef<HTMLIonModalElement>(null);

  useIonViewWillEnter(async () => {
    const users = await getMember();
    setUsers(users)
    setLoading(false)
    
    
  });



  const getMember = async () => {
    const data = await fetch(`${url}`)
    
    const clanInfo = await data.json()
    return clanInfo.memberList
    
    
  }

  


    const loadMembers = async ()  => {
      const result: any = await memberList()

      setResults(result.memberList)
    }
    
    
    loadMembers()








  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList id="open-modal">
          {results.map(( item: Member, _key:number,) => (
            <IonItem key={item.clanRank} >
              <p>{item.clanRank} </p> 
              {item.name}
              
            </IonItem>


          ))}
        </IonList>
      </IonContent>

      <IonModal ref={modal} trigger="open-modal" >
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonList>
            {users.map((user) => (
              <IonCard key={user.clanRank}>
                <IonCardContent>
                  <IonItem>
                    <IonLabel>
                      {user.name}
                    </IonLabel>
                  </IonItem>

                </IonCardContent>
              </IonCard>
            ))}
         
          </IonList>
        </IonContent>
      </IonModal>
    </IonPage>
  );
};

export default Tab1;
