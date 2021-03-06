import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import NavigationBar from './NavigationBar';
import Profile from './Profile'
import Divider from './Divider'
import Section from './Section'
import RaceItem from './RaceItem'
import {threeLastRaces} from '../helpers/utils/fixtures'

export default class Dashboard extends React.Component {
    render() {
        return (
            <View>
                <NavigationBar title="Tableau de bord" />
                <Profile name='Pierre Dufour' />
                <Divider margin={4} color='#00000014'/>
                <Section title='Profil' seeMore={true}>
                    <View style={styles.schemeContainer}>
                        <View style={styles.textContainer}>
                            <Text style={styles.levelText}>Niveau</Text>
                            <Text style={styles.medalsText}>Dernières médailles</Text>
                        </View>
                        <View style={styles.starBox}>
                            <View style={styles.starContainer}>
                                <Image style={styles.star} source={require('../assets/icons/round_star_border_black_40.png')} height={40} width={40} />
                                <Text style={styles.starText}>12</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.medalsContainer}>
                        <View style={styles.medal}></View>
                        <View style={styles.medal}></View>
                        <View style={styles.medal}></View>
                    </View>
                </Section >
                <Divider margin={4} color='#00000014'/>
                <Section title='Courses' seeMore={true}>
                    <FlatList
                        data = {threeLastRaces}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <RaceItem race={item}/> }
                    />
                </Section>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    schemeContainer: {
        marginLeft: 40,
        marginRight: 40,
        flexDirection: 'row',
    },
    textContainer: {
        flex: 0.7,
    },
    levelText: {
        marginTop: 20,
        fontSize: 14,
    },
    medalsText: {
        fontSize: 14,
        marginTop: 4,
    },
    starBox: {
        flex: 0.3,
        alignItems: 'flex-end',
    },
    starContainer: {
        marginTop: 8,
        width: 40,
        height: 40,
        backgroundColor: '#FFAA00',
    },
    star: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    starText: {
        position: 'absolute',
        top: 12,
        left: 12,
        color: '#FFFFFFB0'
    },
    medalsContainer: {
        marginTop: 16,
        marginLeft: 40,
        marginRight: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    medal: {
        width: 64,
        height: 64,
        backgroundColor: '#00000047',
        borderRadius: 4,
    },
});