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
import { Star, Quote, MapPin } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function CommunityScreen() {
  const testimonials = [
    {
      name: 'Jake Morrison',
      location: 'Gold Coast, Australia',
      rating: 5,
      text: 'WaveMate changed how I surf! I\'ve found amazing local spots and made incredible friends. The real-time conditions are spot on.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      surfImage: 'https://images.pexels.com/photos/390051/surfer-wave-sunset-the-indian-ocean-390051.jpeg',
    },
    {
      name: 'Sofia Chen',
      location: 'Malibu, California',
      rating: 5,
      text: 'As a beginner, finding the right spots and people to surf with was intimidating. WaveMate made it so easy and welcoming!',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      surfImage: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
    },
    {
      name: 'Marcus Rivera',
      location: 'Pipeline, Hawaii',
      rating: 5,
      text: 'The community vibe is incredible. I travel for surf and WaveMate helps me connect with locals everywhere I go.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg',
      surfImage: 'https://images.pexels.com/photos/1300510/pexels-photo-1300510.jpeg',
    },
    {
      name: 'Emma Thompson',
      location: 'Byron Bay, Australia',
      rating: 5,
      text: 'Love how I can check conditions before heading out and connect with other female surfers in my area. Game changer!',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      surfImage: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    },
  ];

  const faqs = [
    {
      question: 'Is WaveMate free to use?',
      answer: 'Yes! WaveMate is free to download and use. We offer premium features for enhanced functionality, but the core community features are always free.',
    },
    {
      question: 'How accurate are the surf conditions?',
      answer: 'Our conditions are crowd-sourced from real surfers at each spot, providing more accurate and up-to-date information than traditional surf reports.',
    },
    {
      question: 'Can I use WaveMate while traveling?',
      answer: 'Absolutely! WaveMate works worldwide. Connect with local surfers wherever your surf adventures take you.',
    },
    {
      question: 'Is it safe to meet strangers from the app?',
      answer: 'Safety is our priority. All users are verified, and we provide safety guidelines. Always meet in public places and surf with groups when possible.',
    },
    {
      question: 'How do I report inappropriate behavior?',
      answer: 'We have a zero-tolerance policy for inappropriate behavior. Use the report function in any chat or profile to alert our moderation team.',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <LinearGradient
        colors={['#0891B2', '#0EA5E9']}
        style={styles.header}>
        <Text style={styles.headerTitle}>Community</Text>
        <Text style={styles.headerSubtitle}>
          Hear from surfers around the world
        </Text>
      </LinearGradient>

      {/* Testimonials */}
      <View style={styles.testimonialsContainer}>
        <Text style={styles.sectionTitle}>What Surfers Say</Text>
        
        {testimonials.map((testimonial, index) => (
          <View key={index} style={styles.testimonialCard}>
            <Image
              source={{ uri: testimonial.surfImage }}
              style={styles.testimonialBackground}
              resizeMode="cover"
            />
            <LinearGradient
              colors={['rgba(8, 145, 178, 0.9)', 'rgba(14, 165, 233, 0.8)']}
              style={styles.testimonialOverlay}>
              
              <View style={styles.testimonialContent}>
                <Quote size={24} color="#FFFFFF" strokeWidth={2} />
                <Text style={styles.testimonialText}>{testimonial.text}</Text>
                
                <View style={styles.testimonialFooter}>
                  <Image
                    source={{ uri: testimonial.avatar }}
                    style={styles.avatar}
                    resizeMode="cover"
                  />
                  <View style={styles.testimonialInfo}>
                    <Text style={styles.testimonialName}>{testimonial.name}</Text>
                    <View style={styles.locationContainer}>
                      <MapPin size={14} color="#FFFFFF" strokeWidth={2} />
                      <Text style={styles.testimonialLocation}>{testimonial.location}</Text>
                    </View>
                    <View style={styles.rating}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} color="#FCD34D" fill="#FCD34D" strokeWidth={0} />
                      ))}
                    </View>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        ))}
      </View>

      {/* FAQ Section */}
      <View style={styles.faqContainer}>
        <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
        
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            <Text style={styles.faqAnswer}>{faq.answer}</Text>
          </View>
        ))}
      </View>

      {/* Community Stats */}
      <LinearGradient
        colors={['#F5F5DC', '#FEFEFE']}
        style={styles.communityStats}>
        <Text style={styles.communityStatsTitle}>Growing Every Day</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>500+</Text>
            <Text style={styles.statLabel}>Daily Sessions</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>95%</Text>
            <Text style={styles.statLabel}>Satisfaction Rate</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>75</Text>
            <Text style={styles.statLabel}>Countries</Text>
          </View>
        </View>
      </LinearGradient>
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
  testimonialsContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 32,
  },
  testimonialCard: {
    height: 220,
    borderRadius: 16,
    marginBottom: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  testimonialBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  testimonialOverlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  testimonialContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  testimonialText: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
    fontWeight: '500',
    marginVertical: 16,
  },
  testimonialFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  testimonialInfo: {
    flex: 1,
  },
  testimonialName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  testimonialLocation: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  rating: {
    flexDirection: 'row',
    gap: 2,
  },
  faqContainer: {
    padding: 20,
    backgroundColor: '#F8FAFC',
  },
  faqItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 22,
  },
  communityStats: {
    padding: 40,
    marginTop: 20,
  },
  communityStatsTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0891B2',
    textAlign: 'center',
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0891B2',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
});