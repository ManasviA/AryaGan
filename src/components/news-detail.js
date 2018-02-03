/* @flow */
/*eslint-disable prefer-const */
import React from 'react';
import {
    Image,
    Text,
    View,
    ScrollView,
    StyleSheet,
    BackHandler
} from "react-native";
import { Card } from 'react-native-elements';
import PropTypes from 'prop-types';
import { loadNewsDetail } from '../actions/action-creators';

const styles = StyleSheet.create({
    title: {
        flex: 0,
        textAlign: 'center',
        color: "#0f1726",
        fontSize: 16,
        fontWeight: "bold",
        padding: 20,
        paddingTop: 5
    },
    time: {
        flex: 0,
        textAlign: 'center',
        color: "#1bce7c",
        fontSize: 14,
        fontWeight: "bold",
        padding: 20,
        paddingBottom: 5
    },
    summary: {
        flex: 1,
        textAlign: 'left',
        color: "#0f1726",
        fontSize: 14
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: "#1bce7c",
        margin: 10,
        alignSelf: 'center'
    },
    speaker: {
        color: "#0f1726",
        fontSize: 18,
        fontWeight: "600",
        margin: 5,
        textAlign: "center"
    },
    company: {
        fontSize: 16,
        color: "#888",
        fontStyle: "italic",
        textAlign: "center"
    },
});

class NewsDetail extends React.Component {

    render() {
        return (
            //   <ScrollView
            //     style={{flex: 1}}
            //     contentContainerStyle={{
            //       justifyContent: "center",
            //       alignItems: "stretch",
            //       flexDirection: "column"
            //     }}
            //   >
            //     <Image
            //       resizeMode="cover"
            //       source={{uri: this.props.photo}}
            //       style={styles.image}/>
            //     <Text
            //       style={styles.speaker}>
            //       {this.props.title}
            //     </Text>
            //     <Text
            //       style={styles.company}>
            //       {this.props.date}
            //     </Text>
            //     <Text style={styles.title}>
            //       {this.props.title.toUpperCase()}
            //     </Text>
            //     {
            //         this.props.newsDetail?this.props.newsDetail.map((fragment,index)=>
            //             (<Text style={styles.summary} key={index}>{fragment}</Text>)
            //         ):null
            //     }
            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "stretch",
                    flexDirection: "column"
                }}>
                <Card
                    image={this.props.photo ? { uri: this.props.photo } : null}
                    containerStyle={{ padding: 0, paddingHorizontal: 0, marginHorizontal: 0 }}>
                    <Text style={{ marginBottom: 10 }}>
                        {this.props.summary}
                    </Text>
                </Card>
                <View style={{margin:10}}>
                {
                    this.props.newsDetail ? this.props.newsDetail.map((fragment, index) =>
                        (<Text style={styles.summary} key={index}>{fragment}</Text>)
                    ) : null
                }
                </View>
            </ScrollView>
        );
    }
}

NewsDetail.propTypes = {
    id: PropTypes.string,
    date: PropTypes.string,
    title: PropTypes.string,
    photo: PropTypes.string,
    summary: PropTypes.string,
    newsDetail: PropTypes.array
};


export default class NewsDetailContainer extends React.Component {
    componentDidMount() {
        var _this = this;
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        this.props.dispatch(loadNewsDetail(_this.props.navigation.state.params.detail.id));
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    onBackPress = () => {
        const { navigation } = this.props;
        navigation.goBack();
        return true;
    };
    render() {
        return (<NewsDetail newsDetail={this.props.newsDetail} {...this.props.navigation.state.params.detail} />);
    }
}