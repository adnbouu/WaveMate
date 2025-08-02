import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Waves, MapPin, Users, TrendingUp, Smartphone, Apple } from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <LinearGradient
        colors={['#0891B2', '#0EA5E9', '#38BDF8']}
        style={styles.heroSection}>
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>WaveMate</Text>
          <Text style={styles.heroSubtitle}>
            Connect. Surf. Explore.
          </Text>
          <Text style={styles.heroDescription}>
            Join the global community of surfers sharing waves, conditions, and stoke
          </Text>
          
          <View style={styles.downloadButtons}>
            <TouchableOpacity style={styles.downloadButton}>
              <Apple size={24} color="#FFFFFF" strokeWidth={2} />
              <View style={styles.downloadButtonText}>
                <Text style={styles.downloadButtonSmall}>Download on the</Text>
                <Text style={styles.downloadButtonLarge}>App Store</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.downloadButton}>
              <Smartphone size={24} color="#FFFFFF" strokeWidth={2} />
              <View style={styles.downloadButtonText}>
                <Text style={styles.downloadButtonSmall}>Get it on</Text>
                <Text style={styles.downloadButtonLarge}>Google Play</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        
        <Image
          source={{ uri: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg' }}
          style={styles.heroImage}
          resizeMode="cover"
        />
      </LinearGradient>

      {/* Features Preview */}
      <View style={styles.featuresPreview}>
        <Text style={styles.sectionTitle}>Surf Better Together</Text>
        
        <View style={styles.featureGrid}>
          <View style={styles.featureCard}>
            <MapPin size={32} color="#0891B2" strokeWidth={2} />
            <Text style={styles.featureTitle}>Find Spots</Text>
            <Text style={styles.featureDescription}>
              Discover new surf breaks based on your skill level
            </Text>
          </View>
          
          <View style={styles.featureCard}>
            <Users size={32} color="#0891B2" strokeWidth={2} />
            <Text style={styles.featureTitle}>Meet Surfers</Text>
            <Text style={styles.featureDescription}>
              Connect with local surf buddies and join sessions
            </Text>
          </View>
          
          <View style={styles.featureCard}>
            <Waves size={32} color="#0891B2" strokeWidth={2} />
            <Text style={styles.featureTitle}>Live Conditions</Text>
            <Text style={styles.featureDescription}>
              Share and check real-time surf reports
            </Text>
          </View>
          
          <View style={styles.featureCard}>
            <TrendingUp size={32} color="#0891B2" strokeWidth={2} />
            <Text style={styles.featureTitle}>Track Progress</Text>
            <Text style={styles.featureDescription}>
              Log your sessions and improve your skills
            </Text>
          </View>
        </View>
      </View>

      {/* Community Stats */}
      <LinearGradient
        colors={['#F5F5DC', '#FEFEFE']}
        style={styles.statsSection}>
        <Text style={styles.statsTitle}>Join the Wave</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>50K+</Text>
            <Text style={styles.statLabel}>Active Surfers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2K+</Text>
            <Text style={styles.statLabel}>Surf Spots</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>100K+</Text>
            <Text style={styles.statLabel}>Sessions Shared</Text>
          </View>
        </View>
      </LinearGradient>

      {/* Ocean Image */}
      <View style={styles.oceanImageSection}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg' }}
          style={styles.oceanImage}
          resizeMode="cover"
        />
        <View style={styles.oceanImageOverlay}>
          <Text style={styles.oceanImageText}>
            "Every wave is a new adventure waiting to be shared"
          </Text>
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
  heroSection: {
    height: height * 0.85,
    paddingHorizontal: 20,
    paddingTop: 60,
    position: 'relative',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  heroSubtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 16,
    opacity: 0.95,
  },
  heroDescription: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 40,
    opacity: 0.9,
    paddingHorizontal: 20,
    lineHeight: 24,
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  downloadButtons: {
    flexDirection: 'column',
    gap: 16,
    alignItems: 'center',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    gap: 12,
    minWidth: 200,
  },
  downloadButtonText: {
    flex: 1,
  },
  downloadButtonSmall: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  downloadButtonLarge: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  featuresPreview: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 32,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  featureCard: {
    width: (width - 56) / 2,
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  statsSection: {
    padding: 40,
    marginVertical: 20,
  },
  statsTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0891B2',
    textAlign: 'center',
    marginBottom: 32,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0891B2',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  oceanImageSection: {
    height: 200,
    position: 'relative',
    marginVertical: 20,
  },
  oceanImage: {
    width: '100%',
    height: '100%',
  },
  oceanImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(8, 145, 178, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  oceanImageText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: '600',
    fontStyle: 'italic',
  },
});