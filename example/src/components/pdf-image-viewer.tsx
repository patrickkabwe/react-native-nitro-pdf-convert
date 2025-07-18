import {
  FlatList,
  ListRenderItem,
  StyleProp,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import { PdfConvertResult } from 'react-native-nitro-pdf-convert';

type PDFImageViewerProps = {
  data: PdfConvertResult[];
  renderItem: ListRenderItem<PdfConvertResult>;
  style?: StyleProp<ViewStyle>;
};

export const PDFImageViewer = ({
  data,
  style,
  renderItem,
}: PDFImageViewerProps) => {
  const { width } = useWindowDimensions();
  const calcWidth = width * 0.73;

  return (
    <View style={style}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'lightgray',
          alignItems: 'center',
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Design by eye not by math{' '}
        </Text>
        <Text style={{ fontSize: 16 }}>- {data.length} pages </Text>
      </View>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum
        snapToInterval={calcWidth + 5}
        contentContainerStyle={{
          gap: 5,
          backgroundColor: 'lightgray',
        }}
        decelerationRate="fast"
        snapToAlignment="center"
        bounces={false}
        data={data}
        renderItem={renderItem}
        getItemLayout={(_, index) => ({
          length: calcWidth + 5,
          offset: (calcWidth + 5) * index,
          index,
        })}
      />
      <View style={{ height: 5, backgroundColor: 'lightgray' }} />
    </View>
  );
};
