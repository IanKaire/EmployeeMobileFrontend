import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const index = () => {
  return (
    <Redirect href="/(home)"/>
  )
}

export default index;

export const apiUrl = process.env.EXPO_PUBLIC_API_URL;

const styles = StyleSheet.create({})