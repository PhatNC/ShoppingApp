import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import Image from 'react-native-remote-svg';
import checkIcon from './assets/checked.svg';
import cancelIcon from './assets/cancel.svg';
import zzzIcon from './assets/zzz.svg';

import Card from "./Card";
import EmptyState from './EmptyState';

import { Icon } from 'react-native-elements';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class Tinder extends React.Component {

  constructor(props) {
    super(props);
    props.getNewProductRequest();
    const cards = this.getCards();
    this.state = { cards };
  }

  componentWillMount() {
    // this.props.getNewProductRequest();
  }

  getCards = () => {
    const cards = this.props.newProducts;
    if (cards.length > 0) {
      let lastItemPosition = false;
      cards.forEach((card, i) => {
        const position = new Animated.ValueXY();
        card.position = position;
        card.parentPosition = lastItemPosition;
        lastItemPosition = position;
        card.isActive = false;
      });

      cards[0].isActive = true;
    }
    return cards;
  }

  onCardSwiped = (_id) => {
    this.setState(prevState => {
      const swipedIndex = prevState.cards.findIndex(card => card._id === _id);
      const isLastIndex = swipedIndex === (prevState.cards.length - 1);
      const nextIndex = swipedIndex + 1;
      const newState = { ...prevState };
      newState.cards[swipedIndex]['isActive'] = false;
      if (isLastIndex) return prevState;
      newState.cards[nextIndex]['isActive'] = true;
      return newState;
    });
  }

  handleNopeSelect = (dy = 0, position = false) => {
    const activeIndex = this.state.cards.findIndex(card => card.isActive);

    if (this.props.authen._id) {
      this.props.addUpdateFavoriteRequest({
        product: this.state.cards[activeIndex],
        favorFlg: false,
        accountID: this.props.authen._id,
        productID: this.state.cards[activeIndex].productID,

      })
    }

    if (activeIndex < 0) return;
    if (!position) {
      position = this.state.cards[activeIndex].position;
    }
    Animated.spring(position, {
      toValue: { x: SCREEN_WIDTH + 100, y: dy }
    }).start(this.onCardSwiped(this.state.cards[activeIndex]._id));
  }

  handleLikeSelect = (dy = 0, position = false) => {

    const activeIndex = this.state.cards.findIndex(card => card.isActive);

    if (this.props.authen._id) {
      this.props.addUpdateFavoriteRequest({
        product: this.state.cards[activeIndex],
        favorFlg: true,
        accountID: this.props.authen._id,
        productID: this.state.cards[activeIndex].productID,
      })
    }

    if (activeIndex < 0) return;
    if (!position) {
      position = this.state.cards[activeIndex].position;
    }
    Animated.spring(position, {
      toValue: { x: -SCREEN_WIDTH - 100, y: dy }
    }).start(this.onCardSwiped(this.state.cards[activeIndex]._id));
  }

  renderCards = (cards) => {
    if (this.isEmptyState()) return <EmptyState reloadCards={() => this.reloadCards()} />

    return cards.map((card, index) => {
      return <Card
        key={card._id} {...card}
        handleNopeSelect={this.handleNopeSelect}
        handleLikeSelect={this.handleLikeSelect} />;
    }).reverse();
  }

  reloadCards() {
    const cards = this.getCards();
    this.setState({ cards });
  }

  isEmptyState = () => {
    return this.state.cards.findIndex(card => card.isActive) < 0;
  }

  render() {
    if (this.props.newProducts.length > 0)
      return (
        <View style={styles.container} >
          <View style={styles.cardArea} >
            {this.renderCards(this.state.cards)}
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => this.handleLikeSelect()} >
              <Image source={checkIcon} style={styles.btnIcon} />

            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => this.handleNopeSelect()} >
              <Image source={cancelIcon} style={styles.btnIcon} />
            </TouchableOpacity>
          </View>
        </View>
      );
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
        <View style={styles.zzzContainer} >
          <Image source={zzzIcon} style={styles.zzz} />
        </View>
        <Text style={styles.heading} >That's all folks...</Text>
        <Text style={styles.caption} >No cards to display.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  cardArea: {
    flex: 10,
    marginTop: 30
  },
  btnContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    backgroundColor: '#efefef',
  },
  btnIcon: {
    height: 20,
    width: 20,
  },
  zzzContainer: { padding: 20 },
  zzz: {
    height: 75,
    width: 75,
  },
});
