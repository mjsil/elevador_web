import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

const StackNavigation = createStackNavigator();

import Container from './components/Container';
import Home from './pages/Home';
import Header from './components/Header';
import Client from './pages/Client';
import Elevator from './pages/Elevator';
import SideBar from './components/SideBar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <SideBar {...props} />
            <DrawerItemList {...props} />
            {/* <DrawerItem
                label="Fechar Menu"
                onPress={() =>
                    props.navigation.dispatch(DrawerActions.closeDrawer())
                }
            /> */}
        </DrawerContentScrollView>
    );
}

const MyDrawer = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            drawerContentOptions={{
                activeBackgroundColor: '#006CC7',
                inactiveBackgroundColor: '#F2F2F2',
                activeTintColor: '#fff',
                itemStyle: {
                    width: '100%',
                    marginLeft: 0,
                    borderRadius: 0,
                    paddingHorizontal: 16,
                },
            }}
        >
            <Drawer.Screen
                name="Início"
                component={Header}
                options={{
                    drawerIcon: ({ color, size, focused }) => (
                        <Feather name="home" size={16} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Clientes"
                component={Client}
                options={{
                    drawerIcon: ({ color, size, focused }) => (
                        <Feather name="users" size={16} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
};

const Routes = () => {
    return (
        <>
            <StatusBar
                translucent
                barStyle="dark-content"
                backgroundColor="#fff"
            />

            <NavigationContainer>
                <StackNavigation.Navigator
                    initialRouteName={'SignIn'}
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <StackNavigation.Screen
                        name="DrawerMenu"
                        component={MyDrawer}
                    />
                    <StackNavigation.Screen name="SignIn" component={SignIn} />
                    <StackNavigation.Screen name="SignUp" component={SignUp} />
                    <StackNavigation.Screen
                        name="Elevator"
                        component={Elevator}
                    />
                </StackNavigation.Navigator>
            </NavigationContainer>
        </>
    );
};

export default Routes;
