import { Text } from "react-native";
import RegisterScreen from "./src/screens/Register";
import { createStaticNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./src/screens/Loginscreen";
import HomeScreen from "./src/screens/Homescreen";
import BottomNavigation from "./src/navigators/BottomNavigation";
import actor from "./src/screens/actor";
import allu from "./src/screens/allu";
import raja from "./src/screens/raja";
import suku from "./src/screens/suku";
import about from "./src/screens/about";
import animate from "./src/screens/animate";
import Recordscreen from "./src/futures/records/Recordscreen";

const App=()=>{

  const Stack= createNativeStackNavigator()
  return (
    <NavigationContainer>
      
      <Stack.Navigator   
      
      initialRouteName="BottomNavigation">
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="actor" component={actor} options={{ headerShown: false }}/>
        <Stack.Screen name="allu" component={allu} options={{ headerShown: false }}/>
        <Stack.Screen name="raja" component={raja} options={{ headerShown: false }}/>
        <Stack.Screen name="suku" component={suku} options={{ headerShown: false }}/>
        <Stack.Screen name="about" component={about} options={{ headerShown: false }}/>
        <Stack.Screen name="ani" component={animate} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Recordscreen} options={{ headerShown: false }}/>


      </Stack.Navigator>
    

    </NavigationContainer>
  )
}

export default App