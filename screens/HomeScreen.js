import React                             from 'react';
import tw                                from 'tailwind-react-native-classnames';
import NavOptions                        from '../components/NavOptions';
import { GooglePlacesAutocomplete }      from 'react-native-google-places-autocomplete';
import { 
    StyleSheet, 
    Text, 
    View, 
    SafeAreaView, 
    Image 
}                                        from 'react-native';
import { GOOGLE_MAPS_APIKEY }            from '@env';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
          <Image 
              style  = {styles.image}
              source = {{uri : 'https://links.papareact.com/gzs',}}
          />
      </View>

      <GooglePlacesAutocomplete 
          styles={{
              container : {
                  flex : 0,
              },
              textInput: {
                  fontSize : 18,
              },
          }}
          query={{
              key      : 'AIzaSyASwnPVNdXCJRh_DZxqt0xF78VZiZwpmpw',
              language : 'en',
          }}
          onPress={(data, details) => {
              console.log (data);
              console.log (details);
          }}
          fetchDetails={true}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
          placeholder='Where From?'
      />

      <NavOptions />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    image : {
        width      : 100, 
        height     : 100,
        resizeMode : 'contain',
    },
});
