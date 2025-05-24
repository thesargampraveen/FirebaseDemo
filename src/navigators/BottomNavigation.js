import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Deliveryscreen from '../futures/delivery/Deliveryscreen';
import HomeScreen from '../screens/Homescreen';
import Livescreen from '../futures/live/Livescreen';
import Recordscreen from '../futures/records/Recordscreen';
import Entypo from "react-native-vector-icons/Entypo";   
import AntDesign from "react-native-vector-icons/AntDesign"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarActiveTintColor: 'white',     // color for active icon/text
      tabBarInactiveTintColor: 'white',      // color for inactive icon/text
      tabBarStyle: { backgroundColor: '#222' }, // background color
    }}>
      <Tab.Screen name="Home" component={HomeScreen}  options={{ 
        headerShown: false,
       tabBarIcon:({size,focused,color})=>{
        return <Entypo name={"home"} size={size} color={color}/>

     
        
       }
      }}/>


      <Tab.Screen name="Search" component={Deliveryscreen}options={{ 
        headerShown: false,
       tabBarIcon:({size,focused,color})=>{
        return <AntDesign name={"search1"} size={size} color={color}/>

     
        
       }
      }}/>
       

         <Tab.Screen name="Profile" component={Recordscreen}options={{ 
        headerShown: false,
       tabBarIcon:({size,focused,color})=>{
        return <Ionicons name={"person"} size={size} color={color}/>

     
        
       }
      }}/>
      


      <Tab.Screen name="More" component={Livescreen}options={{ 
        headerShown: false,
       tabBarIcon:({size,focused,color})=>{
        return <MaterialCommunityIcons name={"dots-vertical"} size={size} color={color}/>

     
        
       }
      }}/>
    
      

    </Tab.Navigator>
  );
}
export default BottomNavigation;