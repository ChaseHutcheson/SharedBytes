import { View, Text, TouchableOpacity } from 'react-native'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FoodBankSchema, getFoodBankItems } from '@/api/foodBank';
import { Box, useSafeArea } from 'native-base';
import { useAsync, useMountEffect } from '@react-hookz/web';

interface params{
    selectedFoodBank:FoodBankSchema | null;
    modalVisible:Boolean;
    setModalVisible:Dispatch<SetStateAction<boolean>>;
}

interface ItemCountSchema {
    cans:number;
    snacks:number;
    beverages:number;
}

const BankModal =  ({selectedFoodBank, modalVisible, setModalVisible}:params) => {
    const [ItemCount, setItemCount] = useState<ItemCountSchema | null>(null)
    const [getFoodBankStatus, getFoodBankActions] = useAsync(getFoodBankItems)

    useMountEffect(() => {
      getFoodBankActions.execute(1);
    })
    
    useEffect(() => {
      if (getFoodBankStatus.status === "success" && getFoodBankStatus.result) {
        const foodBank = getFoodBankStatus.result

        const items: ItemCountSchema = {cans: foodBank.cans, snacks: foodBank.snacks, beverages: foodBank.beverages};
        setItemCount(items)
      }
    }, [getFoodBankStatus])

  return (
<View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              width: "80%",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {selectedFoodBank?.name}
            </Text>
            <Text style={{ fontSize: 16 }}>{selectedFoodBank?.address}</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Items</Text>
            {ItemCount != null && (
                <>
                    <Text>Cans: {ItemCount.cans}</Text>
                    <Text>Snacks: {ItemCount.snacks}</Text>
                    <Text>Beverages: {ItemCount.beverages}</Text>
                </>
            )}
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Box color="danger.400" bgColor="danger.400" borderRadius={40}>
                <Text>Hide Modal</Text>
              </Box>
            </TouchableOpacity>
          </View>
        </View>
  )
}

export default BankModal;