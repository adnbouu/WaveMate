import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { 
  Apple, 
  Smartphone, 
  Download, 
  Shield, 
  Zap, 
  Users,
  Star
} from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

export default function DownloadScreen() {
  const appFeatures = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Your data is protected with end-to-end encryption',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Instant updates and real-time notifications',
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Connect with 50K+ surfers worldwide',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#0891B2', '#0EA5E9', '#38BDF8']}
        style={styles.header}>
        <View style={styles.headerContent}>
          <Download size={48} color="#FFFFFF" strokeWidth={2} />
          <Text style={styles.headerTitle}>Get WaveMate</Text>
          <Text style={styles.headerSubtitle}>
            Start your surf adventure today
          </Text>
        </View>
      </LinearGradient>

      {/* App Preview */}
      <View style={styles.appPreviewSection}>
        <Text style={styles.sectionTitle}>Experience the App</Text>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg' }}
          style={styles.appPreviewImage}
          resizeMode="cover"
        />
        <View style={styles.appPreviewOverlay}>
          <View style={styles.mockupPhone}>
            <View style={styles.phoneScreen}>
              <Text style={styles.mockupText}>WaveMate</Text>
              <Text style={styles.mockupSubtext}>Find your wave</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Download Buttons */}
      <View style={styles.downloadSection}>
        <Text style={styles.downloadTitle}>Download Now</Text>
        <Text style={styles.downloadSubtitle}>
          Available on iOS and Android devices
        </Text>
        
        <View style={styles.downloadButtons}>
          <TouchableOpacity style={styles.downloadButton}>
            <Apple size={32} color="#FFFFFF" strokeWidth={2} />
            <View style={styles.downloadButtonText}>
              <Text style={styles.downloadButtonSmall}>Download on the</Text>
              <Text style={styles.downloadButtonLarge}>App Store</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.downloadButton}>
            <Smartphone size={32} color="#FFFFFF" strokeWidth={2} />
            <View style={styles.downloadButtonText}>
              <Text style={styles.downloadButtonSmall}>Get it on</Text>
              <Text style={styles.downloadButtonLarge}>Google Play</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* App Features */}
      <View style={styles.appFeaturesSection}>
        <Text style={styles.appFeaturesTitle}>Why Choose WaveMate?</Text>
        
        <View style={styles.appFeaturesGrid}>
          {appFeatures.map((feature, index) => (
            <View key={index} style={styles.appFeatureCard}>
              <View style={styles.appFeatureIcon}>
                <feature.icon size={24} color="#0891B2" strokeWidth={2} />
              </View>
              <Text style={styles.appFeatureTitle}>{feature.title}</Text>
              <Text style={styles.appFeatureDescription}>{feature.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Rating and Reviews */}
      <LinearGradient
        colors={['#F5F5DC', '#FEFEFE']}
        style={styles.ratingsSection}>
        <Text style={styles.ratingsTitle}>Loved by Surfers</Text>
        
        <View style={styles.ratingsStats}>
          <View style={styles.ratingItem}>
            <View style={styles.starsContainer}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} color="#FCD34D" fill="#FCD34D" strokeWidth={0} />
              ))}
            </View>
            <Text style={styles.ratingNumber}>4.9</Text>
            <Text style={styles.ratingLabel}>App Store Rating</Text>
          </View>
          
          <View style={styles.ratingDivider} />
          
          <View style={styles.ratingItem}>
            <View style={styles.starsContainer}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} color="#FCD34D" fill="#FCD34D" strokeWidth={0} />
              ))}
            </View>
            <Text style={styles.ratingNumber}>4.8</Text>
            <Text style={styles.ratingLabel}>Google Play Rating</Text>
          </View>
        </View>
        
        <Text style={styles.reviewsCount}>Based on 12,000+ reviews</Text>
      </LinearGradient>

      {/* Call to Action */}
      <View style={styles.ctaSection}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg' }}
          style={styles.ctaBackground}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['rgba(8, 145, 178, 0.8)', 'rgba(14, 165, 233, 0.7)']}
          style={styles.ctaOverlay}>
          <Text style={styles.ctaTitle}>Ready to Ride?</Text>
          <Text style={styles.ctaText}>
            Join thousands of surfers already using WaveMate to enhance their surf experience
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Download size={20} color="#0891B2" strokeWidth={2} />
            <Text style={styles.ctaButtonText}>Download Free</Text>
          </TouchableOpacity>
        </LinearGradient>
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
  headerContent: {
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    opacity: 0.9,
  },
  appPreviewSection: {
    height: 300,
    position: 'relative',
    marginVertical: 20,
  },
  appPreviewImage: {
    width: '100%',
    height: '100%',
  },
  appPreviewOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockupPhone: {
    width: 180,
    height: 320,
    backgroundColor: '#1F2937',
    borderRadius: 24,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  phoneScreen: {
    flex: 1,
    backgroundColor: '#0891B2',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mockupText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  mockupSubtext: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 32,
    position: 'absolute',
    top: -60,
    left: 20,
    right: 20,
    zIndex: 1,
  },
  downloadSection: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  downloadTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  downloadSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
  },
  downloadButtons: {
    gap: 16,
    alignItems: 'center',
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1F2937',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 16,
    minWidth: 240,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
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
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  appFeaturesSection: {
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  appFeaturesTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  appFeaturesGrid: {
    gap: 16,
  },
  appFeatureCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  appFeatureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appFeatureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
    flex: 1,
  },
  appFeatureDescription: {
    fontSize: 14,
    color: '#6B7280',
    flex: 1,
    lineHeight: 20,
  },
  ratingsSection: {
    padding: 40,
  },
  ratingsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0891B2',
    textAlign: 'center',
    marginBottom: 24,
  },
  ratingsStats: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
  },
  ratingItem: {
    alignItems: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 8,
  },
  ratingNumber: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0891B2',
    marginBottom: 4,
  },
  ratingLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  ratingDivider: {
    width: 1,
    height: 60,
    backgroundColor: '#E5E7EB',
  },
  reviewsCount: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 16,
  },
  ctaSection: {
    height: 250,
    position: 'relative',
  },
  ctaBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  ctaOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  ctaText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
    opacity: 0.9,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0891B2',
  },
});