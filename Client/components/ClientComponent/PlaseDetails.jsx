import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
// import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const PlaseDetails = () => {
  return (
    <View style={styles.plaseDetails}>
      <View style={styles.keyboardNative}>
        <View style={[styles.bg, styles.bgPosition]} />
        <View style={styles.home} />
        <View style={[styles.return, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/")}
          />
          <Text style={[styles.label, styles.labelTypo]}>Go</Text>
        </View>
        <View style={[styles.space, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/rectangle1.png")}
          />
          <Text style={[styles.label1, styles.labelTypo]}>space</Text>
        </View>
        <View style={[styles.view, styles.viewPosition]}>
          <Image
            style={[styles.rectangleIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/rectangle2.png")}
          />
          <Text style={[styles.label2, styles.labelTypo]}>123</Text>
        </View>
        <View style={[styles.delete, styles.shiftPosition]}>
          <View style={[styles.keyLight, styles.bgPosition]}>
            <Image
              style={[styles.rectangleIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/rectangle3.png")}
            />
            <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
            <Image
              style={[styles.backspaceIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../../assets/backspace.png")}
            />
          </View>
        </View>
        <View style={[styles.shift, styles.shiftPosition]}>
          <View style={[styles.keyLight, styles.bgPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={styles.symbol}>{` `}</Text>
          </View>
          <Image
            style={[styles.shiftIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../../assets/shift.png")}
          />
        </View>
        <View style={[styles.m, styles.mPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
        </View>
        <View style={[styles.n, styles.nPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition2]}>N</Text>
        </View>
        <View style={[styles.b, styles.bPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition1]}>B</Text>
        </View>
        <View style={[styles.v, styles.vPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol4, styles.symbolPosition1]}>V</Text>
        </View>
        <View style={[styles.c, styles.cPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol5, styles.symbolPosition2]}>C</Text>
        </View>
        <View style={[styles.x, styles.xPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol4, styles.symbolPosition1]}>X</Text>
        </View>
        <View style={[styles.z, styles.zPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition1]}>Z</Text>
        </View>
        <View style={[styles.l, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolPosition]}>L</Text>
        </View>
        <View style={[styles.k, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol4, styles.symbolPosition1]}>K</Text>
        </View>
        <View style={[styles.j, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol10, styles.symbolPosition]}>J</Text>
        </View>
        <View style={[styles.h, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition2]}>H</Text>
        </View>
        <View style={[styles.g, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition2]}>G</Text>
        </View>
        <View style={[styles.f, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol8, styles.symbolPosition]}>F</Text>
        </View>
        <View style={[styles.d, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol5, styles.symbolPosition2]}>D</Text>
        </View>
        <View style={[styles.s, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol15, styles.symbolPosition1]}>S</Text>
        </View>
        <View style={[styles.a, styles.lPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol4, styles.symbolPosition1]}>A</Text>
        </View>
        <View style={[styles.p, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol15, styles.symbolPosition1]}>P</Text>
        </View>
        <View style={[styles.o, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol2, styles.symbolPosition2]}>O</Text>
        </View>
        <View style={[styles.i, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
        </View>
        <View style={[styles.u, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol20, styles.symbolPosition2]}>U</Text>
        </View>
        <View style={[styles.y, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol4, styles.symbolPosition1]}>Y</Text>
        </View>
        <View style={[styles.t, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol15, styles.symbolPosition1]}>T</Text>
        </View>
        <View style={[styles.r, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol3, styles.symbolPosition1]}>R</Text>
        </View>
        <View style={[styles.e, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol24, styles.symbolPosition]}>E</Text>
        </View>
        <View style={[styles.w, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
        </View>
        <View style={[styles.q, styles.pPosition]}>
          <View style={styles.rectangleShadowBox} />
          <Text style={[styles.symbol20, styles.symbolPosition2]}>Q</Text>
        </View>
      </View>
      <LinearGradient
        style={styles.commentsBar}
        locations={[0, 1]}
        colors={["rgba(255, 255, 255, 0)", "#fff"]}
      >
        <View style={styles.commentInput} />
        <Text style={[styles.toWhom, styles.toWhomFlexBox]}>
          @aliceglasstone
        </Text>
        <View style={[styles.smiles, styles.smilesLayout]}>
          <View style={[styles.smilesChild, styles.smilesLayout]} />
          <Text style={[styles.text, styles.textTypo2]}>👍</Text>
          <Text style={[styles.text, styles.textTypo2]}>{`👌 `}</Text>
          <Text style={[styles.text2, styles.textTypo2]}>{`😆 `}</Text>
          <Text style={[styles.text3, styles.textTypo2]}>🔥</Text>
          <Text style={[styles.text4, styles.textTypo2]}>⭐️</Text>
        </View>
        <Image
          style={styles.happyIcon}
          contentFit="cover"
          source={require("../../assets/happy.png")}
        />
      </LinearGradient>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/vector1.png")}
      />
      <Image
        style={styles.shareIcon}
        contentFit="cover"
        source={require("../../assets/share.png")}
      />
      <Text style={[styles.hammametCaffeShop, styles.caffeTypo]}>{`hammamet
Caffe shop `}</Text>
      <Text style={[styles.the716Caffe, styles.caffeTypo]}>{`The 716
Caffe shop `}</Text>
      <Text style={styles.theGtaeCaffe}>{`The Gtae
Caffe shop `}</Text>
      <View style={styles.n1} />
      <View style={[styles.n11, styles.n11Layout]} />
      <View style={[styles.frame, styles.topLayout]}>
        <Image
          style={[
            styles.personFill1Wght400Grad0OpsIcon,
            styles.fill1IconLayout,
          ]}
          contentFit="cover"
          source={require("../../assets/person-fill1-wght400-grad0-opsz48-1.png")}
        />
        
       
        
       
        <View style={[styles.stars, styles.starsPosition]}>
          <Image
            style={[
              styles.starFill1Wght400Grad0Opsz4Icon,
              styles.viewIconLayout,
            ]}
            contentFit="cover"
            source={require("../../assets/star-fill1-wght400-grad0-opsz48-1.png")}
          />
          <Image
            style={[
              styles.starFill1Wght400Grad0Opsz4Icon1,
              styles.viewIconLayout,
            ]}
            contentFit="cover"
            source={require("../../assets/star-fill1-wght400-grad0-opsz48-2.png")}
          />
          <Image
            style={[
              styles.starFill1Wght400Grad0Opsz4Icon2,
              styles.viewIconLayout,
            ]}
            contentFit="cover"
            source={require("../../assets/star-fill1-wght400-grad0-opsz48-3.png")}
          />
          <Image
            style={[
              styles.starFill1Wght400Grad0Opsz4Icon3,
              styles.viewIconLayout,
            ]}
            contentFit="cover"
            source={require("../../assets/star-fill1-wght400-grad0-opsz48-4.png")}
          />
          <Image
            style={[
              styles.starHalfFill1Wght400Grad0Icon,
              styles.viewIconLayout,
            ]}
            contentFit="cover"
            source={require("../../assets/star-half-fill1-wght400-grad0-opsz48-1.png")}
          />
        </View>
        <Image
          style={[styles.jasonLeungPoi7delfivaUnsplaIcon, styles.topLayout]}
          contentFit="cover"
          source={require("../../assets/jasonleungpoi7delfivaunsplash-2.png")}
        />
      </View>
      <View style={[styles.tint, styles.topLayout]}>
        <View
          style={[
            styles.riverdaleCaliforniaWrapper,
            styles.finalWrapperFlexBox,
          ]}
        >
          <Text style={[styles.riverdaleCalifornia, styles.lunchTypo1]}>
            Riverdale, California
          </Text>
        </View>
        <Image
          style={[styles.pinDropFill1Wght400Grad0OIcon, styles.fill1IconLayout]}
          contentFit="cover"
          source={require("../../assets/pin-drop-fill1-wght400-grad0-opsz48-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  viewPosition: {
    bottom: "13.44%",
    top: "69.41%",
    height: "17.15%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    textAlign: "center",
    color: Color.black,
    lineHeight: 21,
    top: "28.57%",
    height: "50%",
    fontFamily: FontFamily.ptBody,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    left: 0,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "35.49%",
    top: "47.36%",
    width: "11.2%",
    height: "17.15%",
    position: "absolute",
  },
  mPosition: {
    width: "8.53%",
    bottom: "35.49%",
    top: "47.36%",
    height: "17.15%",
    position: "absolute",
  },
  symbolTypo: {
    color: Color.gray70,
    textAlign: "left",
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -13.24,
    fontFamily: FontFamily.ptBody,
    position: "absolute",
  },
  nPosition: {
    left: "65.87%",
    right: "25.6%",
  },
  symbolPosition2: {
    left: "25%",
    textAlign: "left",
    color: Color.gray70,
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -13.24,
    fontFamily: FontFamily.ptBody,
    position: "absolute",
  },
  bPosition: {
    left: "55.73%",
    right: "35.73%",
  },
  symbolPosition1: {
    left: "28.12%",
    textAlign: "left",
    color: Color.gray70,
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -13.24,
    fontFamily: FontFamily.ptBody,
    position: "absolute",
  },
  vPosition: {
    left: "45.87%",
    right: "45.6%",
  },
  cPosition: {
    left: "35.73%",
    right: "55.73%",
  },
  xPosition: {
    left: "25.87%",
    right: "65.6%",
  },
  zPosition: {
    left: "15.73%",
    right: "75.73%",
  },
  lPosition: {
    bottom: "57.54%",
    top: "25.32%",
    width: "8.53%",
    height: "17.15%",
    position: "absolute",
  },
  symbolPosition: {
    left: "31.25%",
    textAlign: "left",
    color: Color.gray70,
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    top: "50%",
    marginTop: -13.24,
    fontFamily: FontFamily.ptBody,
    position: "absolute",
  },
  pPosition: {
    bottom: "79.58%",
    top: "3.27%",
    width: "8.53%",
    height: "17.15%",
    position: "absolute",
  },
  toWhomFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  smilesLayout: {
    height: 31,
    width: 31,
    position: "absolute",
  },
  textTypo2: {
    opacity: 0,
    lineHeight: 18,
    fontSize: FontSize.size_5xl,
    left: "9.68%",
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.ptBody,
    letterSpacing: 0,
    position: "absolute",
  },
  caffeTypo: {
    height: 62,
    width: 99,
    color: Color.white,
    fontFamily: FontFamily.titilliumWebBold,
    fontWeight: "700",
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  n11Layout: {
    width: 386,
    position: "absolute",
  },
  topLayout: {
    width: 428,
    position: "absolute",
  },
  fill1IconLayout: {
    height: 20,
    width: 20,
    left: 17,
    position: "absolute",
  },
  viewIconLayout: {
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  textLayout: {
    height: 10,
    width: 15,
    justifyContent: "center",
    lineHeight: 14,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  itemLayout: {
    width: 30,
    position: "absolute",
  },
  textTypo: {
    top: 8,
    height: 10,
    width: 15,
    justifyContent: "center",
    color: Color.darkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 14,
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  lunchTypo1: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    top: 34,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.darkslategray_100,
  },
  childFrameLayout: {
    height: 1,
    width: 429,
    borderTopWidth: 1,
    borderColor: "#aaa",
    borderStyle: "solid",
  },
  finalWrapperFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  dateLayout: {
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 0.5,
    borderColor: "#313131",
    borderRadius: Border.br_3xs,
    width: 155,
    backgroundColor: Color.snow,
    left: 30,
    flexDirection: "row",
    height: 31,
    alignItems: "center",
    position: "absolute",
    borderStyle: "solid",
  },
  today1Typo: {
    fontWeight: "500",
    color: Color.darkslategray_100,
  },
  tomrBorder: {
    backgroundColor: Color.goldenrod,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 0.5,
    borderColor: "#313131",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
  },
  timingBorder: {
    borderColor: "#e7af2f",
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    position: "absolute",
    borderStyle: "solid",
  },
  lunchTypo: {
    fontSize: FontSize.size_2xs,
    textAlign: "left",
  },
  tomr1FlexBox: {
    left: 97,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  starsPosition: {
    left: 14,
    position: "absolute",
  },
  wrapperFlexBox: {
    top: 370,
    padding: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  detailsTypo: {
    fontStyle: "italic",
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  wrapperBorder: {
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_11xs,
    borderColor: "#d9d9d9",
    borderWidth: 0.5,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    position: "absolute",
    borderStyle: "solid",
  },
  bg: {
    height: "118.82%",
    bottom: "-18.82%",
    backgroundColor: Color.gray20,
  },
  home: {
    marginLeft: -67,
    bottom: 11,
    left: "50%",
    backgroundColor: Color.gray70,
    width: 134,
    height: 5,
    borderRadius: Border.br_81xl,
    position: "absolute",
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs_6,
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    top: 0,
    left: 0,
  },
  label: {
    width: 97,
  },
  return: {
    width: "23.47%",
    left: "75.73%",
    right: "0.8%",
  },
  label1: {
    width: 201,
  },
  space: {
    width: "48.53%",
    right: "25.87%",
    left: "25.6%",
  },
  label2: {
    width: 96,
  },
  view: {
    width: "23.2%",
    right: "76%",
    left: "0.8%",
  },
  label3: {
    width: 46,
  },
  backspaceIcon: {
    height: "66.67%",
    width: "66.67%",
    top: "16.67%",
    right: "16.67%",
    bottom: "16.67%",
    left: "16.67%",
  },
  keyLight: {
    height: "100%",
    bottom: "0%",
  },
  delete: {
    left: "88%",
    right: "0.8%",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.gray0,
    borderRadius: Border.br_8xs_6,
    bottom: 0,
    right: 0,
    top: 0,
    left: 0,
    position: "absolute",
  },
  symbol: {
    left: "51.19%",
    lineHeight: 26,
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    marginTop: -13.24,
    top: "50%",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.ptBody,
    position: "absolute",
  },
  shiftIcon: {
    height: "39.18%",
    width: "44.95%",
    top: "29.05%",
    right: "27.28%",
    bottom: "31.77%",
    left: "27.76%",
  },
  shift: {
    right: "88%",
    left: "0.8%",
  },
  symbol1: {
    width: "62.5%",
    left: "18.75%",
    textAlign: "left",
  },
  m: {
    right: "15.47%",
    left: "76%",
  },
  symbol2: {
    width: "53.13%",
  },
  n: {
    width: "8.53%",
    bottom: "35.49%",
    top: "47.36%",
    height: "17.15%",
    position: "absolute",
  },
  symbol3: {
    width: "46.87%",
  },
  b: {
    width: "8.53%",
    bottom: "35.49%",
    top: "47.36%",
    height: "17.15%",
    position: "absolute",
  },
  symbol4: {
    width: "46.88%",
  },
  v: {
    width: "8.53%",
    bottom: "35.49%",
    top: "47.36%",
    height: "17.15%",
    position: "absolute",
  },
  symbol5: {
    width: "50%",
  },
  c: {
    width: "8.53%",
    bottom: "35.49%",
    top: "47.36%",
    height: "17.15%",
    position: "absolute",
  },
  x: {
    width: "8.53%",
    bottom: "35.49%",
    top: "47.36%",
    height: "17.15%",
    position: "absolute",
  },
  z: {
    width: "8.53%",
    bottom: "35.49%",
    top: "47.36%",
    height: "17.15%",
    position: "absolute",
  },
  symbol8: {
    width: "40.62%",
  },
  l: {
    right: "5.6%",
    left: "85.87%",
  },
  k: {
    right: "15.73%",
    left: "75.73%",
  },
  symbol10: {
    width: "37.5%",
  },
  j: {
    left: "65.87%",
    right: "25.6%",
  },
  h: {
    left: "55.73%",
    right: "35.73%",
  },
  g: {
    left: "45.87%",
    right: "45.6%",
  },
  f: {
    left: "35.73%",
    right: "55.73%",
  },
  d: {
    left: "25.87%",
    right: "65.6%",
  },
  symbol15: {
    width: "43.75%",
  },
  s: {
    left: "15.73%",
    right: "75.73%",
  },
  a: {
    right: "85.6%",
    left: "5.87%",
  },
  p: {
    left: "90.67%",
    right: "0.8%",
  },
  o: {
    right: "10.67%",
    left: "80.8%",
  },
  symbol19: {
    width: "18.75%",
    left: "40.62%",
    textAlign: "left",
  },
  i: {
    right: "20.8%",
    left: "70.67%",
  },
  symbol20: {
    width: "53.12%",
  },
  u: {
    right: "30.67%",
    left: "60.8%",
  },
  y: {
    right: "40.8%",
    left: "50.67%",
  },
  t: {
    right: "50.67%",
    left: "40.8%",
  },
  r: {
    right: "60.8%",
    left: "30.67%",
  },
  symbol24: {
    width: "40.63%",
  },
  e: {
    right: "70.67%",
    left: "20.8%",
  },
  symbol25: {
    width: "68.75%",
    left: "15.62%",
    textAlign: "left",
  },
  w: {
    right: "80.8%",
    left: "10.67%",
  },
  q: {
    right: "90.67%",
    left: "0.8%",
  },
  keyboardNative: {
    top: 1067,
    width: 414,
    height: 271,
    left: 0,
    position: "absolute",
  },
  commentInput: {
    right: 24,
    bottom: 20,
    borderRadius: 8,
    backgroundColor: Color.gray5,
    left: 24,
    top: 77,
    position: "absolute",
  },
  toWhom: {
    left: 40,
    fontSize: FontSize.ptBody_size,
    lineHeight: 22,
    color: Color.text,
    width: 334,
    height: 43,
    alignItems: "center",
    top: 77,
    fontFamily: FontFamily.ptBody,
    letterSpacing: 0,
    display: "flex",
  },
  smilesChild: {
    backgroundColor: Color.gray5,
    top: 0,
    borderRadius: Border.br_81xl,
    left: 0,
  },
  text: {
    top: "16.23%",
  },
  text2: {
    top: "19.35%",
  },
  text3: {
    top: "12.9%",
  },
  text4: {
    top: "16.13%",
  },
  smiles: {
    top: 85,
    left: 350,
  },
  happyIcon: {
    marginTop: 14,
    right: 35,
    width: 28,
    height: 28,
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  commentsBar: {
    right: 8,
    bottom: -161,
    height: 140,
    backgroundColor: "transparent",
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    height: "4.42%",
    width: "9.48%",
    top: "98.12%",
    right: "80.09%",
    bottom: "-2.54%",
    left: "10.43%",
  },
  vectorIcon1: {
    height: "3.67%",
    width: "7.11%",
    top: "77.65%",
    right: "38.15%",
    bottom: "18.67%",
    left: "54.74%",
  },
  shareIcon: {
    top: 401,
    left: 196,
    width: 40,
    height: 40,
    position: "absolute",
  },
  hammametCaffeShop: {
    top: 851,
    left: 431,
  },
  the716Caffe: {
    top: 725,
    left: 75,
  },
  theGtaeCaffe: {
    top: 328,
    left: 59,
    height: 312,
    width: 99,
    color: Color.white,
    fontFamily: FontFamily.titilliumWebBold,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  n1: {
    top: 454,
    left: 43,
    borderRadius: 53,
    width: 394,
    height: 228,
    position: "absolute",
  },
  n11: {
    top: 157,
    left: -26,
    borderRadius: 30,
    height: 230,
  },
  personFill1Wght400Grad0OpsIcon: {
    top: 0,
  },
  child: {
    left: 0,
  },
  text5: {
    color: Color.darkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 4,
    top: 7,
    height: 10,
    width: 15,
  },
  view1: {
    left: 358,
  },
  view2: {
    left: 410,
  },
  view3: {
    left: 514,
  },
  view4: {
    left: 462,
  },
  item: {
    top: -3,
    left: -3,
    height: 30,
  },
  text6: {
    fontWeight: "800",
    fontFamily: FontFamily.poppinsExtraBold,
    color: Color.goldenrod,
    left: 4,
    top: 7,
    height: 10,
    width: 15,
  },
  text7: {
    top: 6,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 4,
  },
  view6: {
    left: 52,
  },
  view7: {
    left: 104,
  },
  text9: {
    left: 3,
    color: Color.darkslategray_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 7,
    height: 10,
    width: 15,
  },
  view8: {
    left: 156,
  },
  text10: {
    left: 4,
  },
  view9: {
    left: 208,
  },
  view10: {
    left: 260,
  },
  text12: {
    left: 5,
  },
  view11: {
    left: 312,
  },
  numbers: {
    top: 40,
    height: 24,
    left: 21,
  },
  partySize: {
    top: 2,
    left: 42,
    width: 92,
    height: 18,
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_100,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  text13: {
    color: Color.darkslategray_100,
    lineHeight: 14,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  wrapper: {
    left: 416,
  },
  container: {
    left: 2,
  },
  frameChild: {
    top: 82,
    width: 429,
    borderTopWidth: 1,
    borderColor: "#aaa",
    left: 0,
    position: "absolute",
  },
  tueJun30: {
    color: Color.darkslategray_100,
    lineHeight: 14,
    textAlign: "center",
    fontSize: FontSize.size_base,
  },
  finalDate: {
    left: 25,
    width: 154,
    padding: Padding.p_3xs,
    height: 41,
    flexDirection: "row",
    top: 82,
    justifyContent: "center",
    alignItems: "center",
  },
  finalTime: {
    left: 281,
    width: 111,
    padding: Padding.p_3xs,
    height: 41,
    flexDirection: "row",
    top: 82,
    justifyContent: "center",
    alignItems: "center",
  },
  frameItem: {
    top: 123,
    left: 0,
    position: "absolute",
  },
  today1: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_sm,
    lineHeight: 14,
    textAlign: "center",
  },
  today: {
    top: 138,
    justifyContent: "center",
  },
  tomorrow: {
    fontSize: FontSize.size_sm,
    color: Color.darkslategray_100,
    lineHeight: 14,
    textAlign: "center",
  },
  tomr: {
    top: 181,
    height: 31,
    width: 155,
    left: 30,
    backgroundColor: Color.goldenrod,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  calendarMonthFill0Wght400GIcon: {
    width: 19,
    height: 19,
    marginLeft: 10,
  },
  date: {
    top: 224,
  },
  lunch: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.darkslategray_100,
  },
  lunchWrapper: {
    width: 58,
    padding: Padding.p_3xs,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    left: 0,
  },
  frameView: {
    top: 30,
    left: 58,
    height: 39,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
  },
  pmWrapper: {
    padding: Padding.p_3xs,
    height: 30,
    top: 0,
  },
  timing: {
    left: 255,
    width: 164,
    top: 181,
    height: 31,
  },
  anyRequests: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: "#aaa",
  },
  anyRequestsWrapper: {
    padding: Padding.p_3xs,
    top: 0,
    left: 0,
  },
  frameInner: {
    top: 269,
    width: 387,
    height: 111,
    backgroundColor: Color.snow,
    left: 21,
    overflow: "hidden",
  },
  tomr1: {
    top: 392,
    width: 217,
    height: 36,
    backgroundColor: Color.goldenrod,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_3xs,
    borderWidth: 0.5,
    borderColor: "#313131",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
  },
  frame: {
    top: 433,
    height: 495,
    left: -15,
    width: 428,
  },
  topChild: {
    top: 408,
    height: 1,
    width: 429,
    borderTopWidth: 1,
    borderColor: "#aaa",
    borderStyle: "solid",
  },
  details: {
    fontFamily: FontFamily.poppinsMediumItalic,
    fontWeight: "500",
    color: Color.darkslategray_100,
  },
  detailsWrapper: {
    left: 315,
  },
  reviewsWrapper: {
    left: 214,
  },
  menuWrapper: {
    left: 122,
  },
  bookings: {
    fontFamily: FontFamily.poppinsBoldItalic,
    color: Color.goldenrod,
    fontWeight: "700",
    fontStyle: "italic",
  },
  bookingsWrapper: {
    left: 11,
  },
  butterChicken: {
    fontFamily: FontFamily.poppinsItalic,
    color: Color.darkslategray_100,
  },
  butterChickenWrapper: {
    top: 0,
    left: 0,
  },
  pastaWrapper: {
    left: 217,
    top: 0,
  },
  outdoorSeatingWrapper: {
    top: 1,
    left: 271,
  },
  biryaniWrapper: {
    left: 117,
    top: 0,
  },
  barWrapper: {
    left: 179,
    top: 0,
  },
  tags: {
    top: 343,
    left: 61,
    width: 363,
    height: 14,
    position: "absolute",
  },
  text16: {
    color: Color.darkslategray_100,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  view12: {
    top: 342,
    width: 48,
    height: 25,
    backgroundColor: Color.snow,
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  starFill1Wght400Grad0Opsz4Icon: {
    left: 1,
  },
  starFill1Wght400Grad0Opsz4Icon1: {
    left: 24,
  },
  starFill1Wght400Grad0Opsz4Icon2: {
    left: 48,
  },
  starFill1Wght400Grad0Opsz4Icon3: {
    left: 72,
  },
  starHalfFill1Wght400Grad0Icon: {
    left: 96,
  },
  stars: {
    top: 301,
    width: 120,
    height: 24,
  },
  jasonLeungPoi7delfivaUnsplaIcon: {
    left: 15,
    height: 285,
    top: 0,
  },
  top: {
    height: 408,
    backgroundColor: Color.snow,
    left: -15,
    width: 428,
    top: 0,
  },
  riverdaleCalifornia: {
    color: Color.snow,
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  riverdaleCaliforniaWrapper: {
    top: 17,
    left: 27,
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_3xs,
  },
  pinDropFill1Wght400Grad0OIcon: {
    top: 27,
  },
  tint: {
    top: 228,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    height: 60,
    left: -15,
    width: 428,
    overflow: "hidden",
  },
  plaseDetails: {
    borderRadius: 12,
    backgroundColor: Color.white,
    borderColor: "#007aff",
    borderWidth: 4,
    flex: 1,
    height: 904,
    overflow: "hidden",
    width: "100%",
    borderStyle: "solid",
  },
});

export default PlaseDetails;
