import React, { useRef, useState }  from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FeedsContent, ButtonFeed, styles, ModalFeed, LinearColor, FeedsContentText, Feeds, ButtonFeedContent, FeedForm, FeedSubmite, PhotoButton, PhotoIMG } from './styles';
import BottomSheet from '@gorhom/bottom-sheet';
import theme from '../../theme';
import * as FileSystem from 'expo-file-system';
import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../libs/api';
import { ActivityIndicator } from 'react-native';
export function Widget() {
  const bottomSheet = useRef<BottomSheet>(null);

  const [select, setSelect] = useState(false)
  const [bug, setBug] = useState(false)
  const [ideas, setIdeas] = useState(false)
  const [another, setAnother] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [textInput, setTextInput] = useState('')
  const [screenShoot, setScreeenShoot] = useState<string | null>(null)

  function handleBackReset(){
    setSelect(false)
    setBug(false)
    setIdeas(false)
    setAnother(false)
    setScreeenShoot(null)
 
  }

  function handleBug(){
    setSelect(true)
    setBug(true)
  }

  function handleIdeas(){
    setSelect(true)
    setIdeas(true)
  }

  function handleAnother(){
    setSelect(true)
    setAnother(true)
  }

  function handleScreenShoot(){
    captureScreen({
      format: 'jpg',
      quality: 0.8
    }).then(uri=> setScreeenShoot(uri))
  }

  function handleRemoveScreenShoot(){
    setScreeenShoot(null)
  }

  async function handleSendFeed(){
    let types = '';
    if(bug){
      types = 'bug'
    }else if(ideas){
      types = 'ideia'
    }else{
      types = 'outros'
    }

    if(textInput.length === 0){
      return;
    }else{

    const screenshotBASE64 = screenShoot && FileSystem.readAsStringAsync(screenShoot, {encoding: 'base64'});
    setIsLoading(true)
      try{

        await api.post('/feedback', {
          type: `${types}`, 
          comment: `${textInput}`, 
          photo: `data:image/png;base64, ${screenshotBASE64}`
        });
        setIsLoading(false)
        handleBackReset();

      }catch(error){
        console.log(error)
        setIsLoading(false)
      }
    }

    }
  
  

    return (
        <>

        <ButtonFeed onPress={()=> bottomSheet.current.expand()}>
            <MaterialIcons name='feedback' size={20} color="white"/>
        </ButtonFeed>


        <ModalFeed
        ref={bottomSheet}
        snapPoints={[1, '50%']}
        backgroundStyle={{borderRadius: 24, backgroundColor: theme.COLORS.PRIMARY}}
        handleIndicatorStyle={styles.Indic}
        enableOverDrag={false}
        
        >
          <LinearColor>
            <FeedsContent>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: "85%"}}>
                {select ? <RectButton onPress={handleBackReset}><MaterialCommunityIcons name='chevron-double-left' size={30} color="white" style={{marginTop: 1.3}}/></RectButton> : <View style={{width: 30,}}></View>}
                <FeedsContentText style={{fontSize: 24, fontWeight: 'bold', }}>Feedbacks</FeedsContentText>
                <View style={{width: 30,}}></View>
              </View>
            {select ? 
            <>
            <Feeds>
                <FeedForm onChangeText={setTextInput} multiline color={theme.COLORS.WHITE} placeholder={bug ? "Algo não está funcionando direito? Conte com detalhes..." : "Conte com detalhes..."}  placeholderTextColor={theme.COLORS.SECONDARY}/>
            </Feeds>
                <View style={{flexDirection: 'row', width: '85%', marginTop: 20, justifyContent:'center', alignContent: 'center', marginBottom: 8}}>
                  {ideas ? null : <PhotoButton onPress={screenShoot ? handleRemoveScreenShoot : handleScreenShoot}>{screenShoot ? <View><PhotoIMG source={{uri:screenShoot}}/><MaterialCommunityIcons name='trash-can-outline' size={30} color="white" style={{position: 'absolute', top: 8,left: 7,}}/></View> 
                  : <MaterialCommunityIcons name='camera-plus-outline' size={30} color="white"/>}</PhotoButton>}<FeedSubmite onPress={handleSendFeed} >{isLoading ? <ActivityIndicator /> : <FeedsContentText style={{fontSize: 20, fontWeight: 'bold', }}>Enviar</FeedsContentText>}</FeedSubmite>
                </View>
            </>
            :

            <Feeds>
              <ButtonFeedContent onPress={handleBug}>
                 <MaterialCommunityIcons name='ladybug' size={50} color="#57606f"/>
                 <FeedsContentText style={{fontSize: 20, fontWeight: 'bold', color: "#57606f"}}>BUG</FeedsContentText>
              </ButtonFeedContent>

              <ButtonFeedContent onPress={handleIdeas}>
                 <MaterialIcons name='lightbulb' size={50} color="#57606f"/>
                 <FeedsContentText style={{fontSize: 20, fontWeight: 'bold', color: "#57606f"}}>IDEIAS</FeedsContentText>
              </ButtonFeedContent>

              <ButtonFeedContent onPress={handleAnother}>
                 <MaterialCommunityIcons name='graph' size={50} color="#57606f"/>
                 <FeedsContentText style={{fontSize: 20, fontWeight: 'bold', color: "#57606f"}}>OUTROS</FeedsContentText>
              </ButtonFeedContent>
            </Feeds>
          }
            <FeedsContentText>@Rodocell</FeedsContentText>
            </FeedsContent>
          </LinearColor>
        </ModalFeed>
    </>
  );
}