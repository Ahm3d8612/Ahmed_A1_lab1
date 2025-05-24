import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [pressedIcon, setPressedIcon] = useState(null);
  const [selectedTab, setSelectedTab] = useState('All');

  const handlePress = (name) => {
    setPressedIcon(name);
    if (['All', 'Music', 'Podcasts', 'Audiobooks'].includes(name)) {
      setSelectedTab(name);
    }
    setTimeout(() => setPressedIcon(null), 200);
  };

  const audiobookItems = [
    {
      name: 'book1',
      source: require('./assets/audio1.png'),
      title: 'The Power of Habit',
      author: 'Charles Duhigg',
    },
    {
      name: 'book2',
      source: require('./assets/audio2.png'),
      title: 'Atomic Habits',
      author: 'James Clear',
    },
    {
      name: 'book3',
      source: require('./assets/audio3.png'),
      title: 'Can not Hurt Me',
      author: 'David Goggins',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.tabsRow}>
        <TouchableWithoutFeedback onPress={() => handlePress('apple')}>
          <View style={[styles.iconWrapper, pressedIcon === 'apple' && styles.pressedWrapper]}>
            <Image source={require('./assets/apple.png')} style={styles.tabIcon} />
          </View>
        </TouchableWithoutFeedback>

        {['All', 'Music', 'Podcasts', 'Audiobooks'].map((label, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => handlePress(label)}>
            <View style={[styles.tabButton, selectedTab === label && styles.activeTab, pressedIcon === label && styles.pressedWrapper]}>
              <Text style={styles.tabText}>{label}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>

      <View style={styles.gridContainer}>
        {[
          'Hot Hits Canada', 'Pop Favourites',
          'Hip-Hop Central', '80s Hard Rock',
          'All About Country', 'Upbeat mix',
          'Daily Wellness', 'Release Radar'
        ].map((title, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => handlePress(title)}>
            <View style={[styles.gridItem, pressedIcon === title && styles.pressedWrapper]}>
              <Image source={require('./assets/music_icon.png')} style={styles.gridIcon} />
              <Text style={styles.gridLabel}>{title}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Recents</Text>
      <View style={styles.recentsGrid}>
        {[
          'Pop mix', 'Hot Hits', 'Upbeat Mix',
          'Daily Wellness', 'Hip-Hop Central', '80s Hard Rock'
        ].map((title, index) => (
          <TouchableWithoutFeedback key={index} onPress={() => handlePress(title)}>
            <View style={[styles.recentItem, pressedIcon === title && styles.pressedWrapper]}>
              <Image source={require('./assets/music_icon.png')} style={styles.recentImage} />
              <Text style={styles.recentTitle}>{title}</Text>
              <Text style={styles.recentMeta}>Playlist  ·  User 1</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Audiobooks for you</Text>
      <View style={styles.audioGrid}>
        {audiobookItems.map((item) => (
          <TouchableWithoutFeedback key={item.name} onPress={() => handlePress(item.name)}>
            <View style={[styles.audioCard, pressedIcon === item.name && styles.pressedWrapper]}>
              <Image source={item.source} style={styles.audioImage} />
              <View style={styles.audioTextBlock}>
                <Text style={styles.premiumLabel}>Included in Premium</Text>
                <Text style={styles.audioTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.audioAuthor}>{item.author}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 16,
    flex: 1,
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  tabIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  iconWrapper: {
    borderRadius: 20,
    padding: 4,
  },
  tabButton: {
    backgroundColor: '#333',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  activeTab: {
    backgroundColor: '#2ecc71',
  },
  tabText: {
    color: '#fff',
    fontSize: 14,
  },
  pressedWrapper: {
    opacity: 0.6,
    transform: [{ scale: 0.96 }],
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  gridIcon: {
    width: 32,
    height: 32,
    tintColor: '#4fc3f7',
  },
  gridLabel: {
    color: '#bbb',
    fontSize: 14,
    flexShrink: 1,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  recentsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 24,
  },
  recentItem: {
    width: '30%',
    backgroundColor: '#4fc3f7',
    borderRadius: 8,
    padding: 6,
    alignItems: 'center',
  },
  recentImage: {
    width: '100%',
    height: 80,
    marginBottom: 4,
    borderRadius: 6,
  },
  recentTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#fff',
  },
  recentMeta: {
    fontSize: 10,
    color: '#222',
  },
  audioGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 30,
  },
  audioCard: {
    width: '48%',
    backgroundColor: '#111',
    borderRadius: 12,
    overflow: 'hidden',
  },
  audioImage: {
    width: '100%',
    height: 120,
  },
  audioTextBlock: {
    padding: 8,
  },
  premiumLabel: {
    color: '#2ecc71',
    fontSize: 12,
    marginBottom: 4,
  },
  audioTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  audioAuthor: {
    color: '#aaa',
    fontSize: 12,
  },
});
