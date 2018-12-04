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
import Card from "./Card";
import EmptyState from './EmptyState';

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
    let lastItemPosition = false;
    cards.forEach((card, i) => {
      const position = new Animated.ValueXY();
      card.position = position;
      card.parentPosition = lastItemPosition;
      lastItemPosition = position;
      card.isActive = false;
    });
    cards[0].isActive = true;
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
    height: 70,
    width: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    backgroundColor: '#efefef',
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
});
