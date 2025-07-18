import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  NitroPdfConvert,
  type PdfConvertResult,
} from 'react-native-nitro-pdf-convert';
import { PDFImageViewer } from './src/components/pdf-image-viewer';

const newPDFPath =
  'file:///Users/patrick/Downloads/9_Real_Reasons_Why_People_Quit_1744642672.pdf';

function App(): React.JSX.Element {
  const [images, setImages] = useState<PdfConvertResult[]>([]);
  const [generating, setGenerating] = useState(false);
  const { width } = useWindowDimensions();

  const calcWidth = width * 0.73;

  useEffect(() => {
    setGenerating(true);
    NitroPdfConvert.toImages(newPDFPath)
      .then(setImages)
      .catch(console.error)
      .finally(() => setGenerating(false));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Design by eye not by math</Text>

        <Text style={styles.text}>
          Design by eye, not by math, emphasizes intuitive visual harmony over
          rigid mathematical calculations. This approach encourages designers to
          trust their creative instincts and visual perception when crafting
          layouts and compositions. <Text style={styles.seeMore}>See more</Text>
        </Text>
      </View>
      {generating ? (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator />
        </View>
      ) : (
        <PDFImageViewer
          data={images}
          style={{ width: width }}
          renderItem={({ item }) => {
            const imageAspectRatio = item.width / item.height;
            return (
              <Image
                source={{ uri: item.path }}
                style={{
                  width: calcWidth,
                  aspectRatio: imageAspectRatio,
                }}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loaderWrapper: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textWrapper: {
    paddingHorizontal: 10,
    gap: 10,
    marginBottom: 20,
  },
  seeMore: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
