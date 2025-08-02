import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  MapPin, 
  Users, 
  Waves, 
  Camera, 
  MessageCircle, 
  Target,
  Calendar,
  Trophy
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function FeaturesScreen() {
  const features = [
    {
      icon: MapPin,
      title: 'Spot Discovery',
      description: 'Find surf spots tailored to your skill level with detailed break information, crowd levels, and local tips from the community.',
      image: 'https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg',
    },
    {
      icon: Users,
      title: 'Surf Buddies',
      description: 'Connect with local surfers, join group sessions, and make lifelong friends who share your passion for the waves.',
      image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
    },
    {
      icon: Waves,
      title: 'Live Conditions',
      description: 'Get real-time updates on wave height, wind direction, tide times, and water temperature from fellow surfers.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    },
    {
      icon: Camera,
      title: 'Session Sharing',
      description: 'Capture and share your best waves, document your progress, and inspire others with your surf adventures.',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg',
    },
    {
      icon: MessageCircle,
      title: 'Chat & Groups',
      description: 'Join local surf groups, discuss conditions, share tips, and stay connected with your surf community.',
      image: 'https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg',
    },
    {
      icon: Target,
      title: 'Skill Matching',
      description: 'Find surfers at your level, get matched with compatible surf buddies, and progress together safely.',
      image: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#0891B2', '#0EA5E9']}
        style={styles.header}>
        <Text style={styles.headerTitle}>App Features</Text>
        <Text style={styles.headerSubtitle}>
          Everything you need to enhance your surf experience
        </Text>
      </LinearGradient>

      {/* Features List */}
      <View style={styles.featuresContainer}>
        {features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <Image
              source={{ uri: feature.image }}
              style={styles.featureImage}
              resizeMode="cover"
            />
            <View style={styles.featureContent}>
              <View style={styles.featureIcon}>
                <feature.icon size={28} color="#0891B2" strokeWidth={2} />
              </View>
              <Text style={styles.featureTitle}>{feature.title}</Text>
              <Text style={styles.featureDescription}>{feature.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Additional Features */}
      <View style={styles.additionalFeatures}>
        <Text style={styles.additionalTitle}>More Ways to Connect</Text>
        
        <View style={styles.additionalGrid}>
          <View style={styles.additionalCard}>
            <Calendar size={24} color="#0891B2" strokeWidth={2} />
            <Text style={styles.additionalCardTitle}>Event Planning</Text>
            <Text style={styles.additionalCardText}>
              Organize surf trips and dawn patrol sessions
            </Text>
          </View>
          
          <View style={styles.additionalCard}>
            <Trophy size={24} color="#0891B2" strokeWidth={2} />
            <Text style={styles.additionalCardTitle}>Challenges</Text>
            <Text style={styles.additionalCardText}>
              Participate in community surf challenges
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
  },
  featuresContainer: {
    padding: 20,
  },
  featureItem: {
    marginBottom: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  featureImage: {
    width: '100%',
    height: 180,
  },
  featureContent: {
    padding: 20,
    alignItems: 'center',
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  additionalFeatures: {
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  additionalTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  additionalGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  additionalCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  additionalCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  additionalCardText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 18,
  },
});