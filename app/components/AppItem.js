import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {
  Icon,
  Row,
  Col,
} from 'native-base';


const AppItem = ({ left, right, body, rowStyle }) => (
  <Row style={rowStyle ? StyleSheet.flatten(rowStyle) : {}} >
    {
      // left
      left ?
        // ------> Icons
        left.iconName ?
          // link icon
          left.handleOnPress ?
            <TouchableOpacity onPress={left.handleOnPress ? left.handleOnPress : null}>
              <Col size={10} style={left.colStyle ? StyleSheet.flatten(left.colStyle) : ''} >
                <Icon
                    name={left.iconName}
                    style={StyleSheet.flatten(left.iconStyle ? left.iconStyle : {})}
                />
              </Col>
            </TouchableOpacity>
          :
            // simple icon
            <View>
              <Col size={10} style={left.colStyle ? StyleSheet.flatten(left.colStyle) : ''} >
                <Icon
                    name={left.iconName}
                    style={StyleSheet.flatten(left.iconStyle ? left.iconStyle : {})}
                />
              </Col>
            </View>
        :
          // ------> Text
          left.handleOnPress ?
            <TouchableOpacity onPress={left.handleOnPress ? left.handleOnPress : null}>
              <Col size={10} style={left.colStyle ? StyleSheet.flatten(left.colStyle) : {}} >
                <Text customStyle={left.textStyle ? left.textStyle : {}}>{left.text ? left.text : ''}</Text>
              </Col>
            </TouchableOpacity>
            :
            <View>
              <Col size={10} style={left.colStyle ? StyleSheet.flatten(left.colStyle) : {}} >
                <Text customStyle={left.textStyle ? left.textStyle : {}}>{left.text ? left.text : ''}</Text>
              </Col>
            </View>
      :
        null
    }

    <Col size={10} style={body.colStyle ? StyleSheet.flatten(body.colStyle) : ''} >
        <Text customStyle={body.textStyle ? body.textStyle : ''}>{body.text ? body.text : ''}</Text>
    </Col>

    {
      // left
      right ?
        // ------> Icons
        right.iconName ?
          // link icon
          right.handleOnPress ?
            <TouchableOpacity onPress={right.handleOnPress ? right.handleOnPress : null}>
              <Col size={10} style={right.colStyle ? StyleSheet.flatten(right.colStyle) : ''} >
                <Icon
                  name={right.iconName}
                  style={StyleSheet.flatten(right.iconStyle ? right.iconStyle : {})}
                />
              </Col>
            </TouchableOpacity>
          :
            // simple icon
            <View>
              <Col size={10} style={right.colStyle ? StyleSheet.flatten(right.colStyle) : ''} >
                <Icon
                  name={right.iconName}
                  style={StyleSheet.flatten(right.iconStyle ? right.iconStyle : {})}
                />
              </Col>
            </View>
        :
          // ------> Text
          right.handleOnPress ?
            <TouchableOpacity onPress={right.handleOnPress ? right.handleOnPress : null}>
              <Col size={10} style={right.colStyle ? StyleSheet.flatten(right.colStyle) : {}} >
                <Text customStyle={right.textStyle ? right.textStyle : {}}>{right.text ? right.text : ''}</Text>
              </Col>
            </TouchableOpacity>
            :
            <View>
              <Col size={10} style={right.colStyle ? StyleSheet.flatten(right.colStyle) : {}} >
                <Text customStyle={right.textStyle ? right.textStyle : {}}>{right.text ? right.text : ''}</Text>
              </Col>
            </View>
      :
        null
    }
  </Row>
);

AppItem.propTypes = {
  body: PropTypes.shape({
    colStyle: PropTypes.any,
    text: PropTypes.string,
  }).isRequired,

  left: PropTypes.shape({
    handleOnPress: PropTypes.function,
    colStyle: PropTypes.any,
    iconName: PropTypes.string,
    iconStyle: Icon.propTypes.style,
    text: PropTypes.string,
    textStyle: Text.propTypes.style,
  }),

  right: PropTypes.shape({
    handleOnPress: PropTypes.function,
    colStyle: PropTypes.any,
    iconName: PropTypes.string,
    iconStyle: Icon.propTypes.style,
    text: PropTypes.string,
    textStyle: Text.propTypes.style,
  }),

  rowStyle: PropTypes.any,
};

AppItem.defaultProps = {
  left: null,
  right: null,
  body: { colStyle: {} },
  rowStyle: {},
};

export default AppItem;
