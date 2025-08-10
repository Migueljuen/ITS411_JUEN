
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Keyboard, SafeAreaView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';

export default function todo() {
    const [tasks, setTasks] = useState(["Buy milk", "Walk dog"])
    const [newTask, setNewTask] = useState("")
    // const [isChecked, setIsChecked] = useState<boolean[]>(Array(tasks.length).fill(false));

    // function toggleInbox(index: number) {
    //     setIsChecked(prev =>
    //         prev.map((value, i) => (i === index ? !value : value))
    //     )
    // }
    function addTask() {
        if (newTask.trim() === "") {
            console.log("itot")
        } else {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index: number) {
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function handleInputChange(text: string) {
        setNewTask(text);
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}>
            <SafeAreaView className='bg-white flex-1'>

                <View className='flex-1 max-w-[85%] mx-auto'>
                    <Text className='mt-24 text-3xl font-bold '>
                        Your To Do
                    </Text>

                    <View className=' flex-1 justify-start items-center'>

                        <View className='flex flex-row my-16   w-full justify-center items-end   gap-4'>
                            <TextInput value={newTask} onChangeText={handleInputChange}
                                placeholder='Add new task'
                                placeholderTextColor={'#00000080'}
                                className='border-b-2 border-black/20 flex-1 p-2 text-[black/50]' ></TextInput>
                            <TouchableOpacity className=' p-2 bg-[#434343]  rounded-xl' onPress={addTask}><Ionicons name="add" size={24} color="white" /></TouchableOpacity>
                        </View>

                        {tasks.map((tasks, index) => (
                            <View key={index} className='flex flex-row w-full justify-between items-center px-4 py-4 mb-4 border border-black/20 rounded-xl'>
                                {/* <Checkbox
                                className=''
                                value={isChecked[index]}
                                onValueChange={() => toggleInbox(index)}
                                color={isChecked ? "#434343" : undefined}
                            /> */}
                                <Text className=''>{tasks}</Text>
                                <TouchableOpacity onPress={() => deleteTask(index)}>
                                    <Ionicons className='' name="close" size={24} color="#434343" />
                                </TouchableOpacity>
                            </View>

                        )
                        )}

                        <View className='mt-6 gap-2'>
                            <Text className=' font-medium'>You have {tasks.length} task/s </Text>
                            <Text className='text-black/50 italic'>"Start where you are. Use what you have. Do what you can." - Arthur Ashe </Text>
                        </View>
                    </View>

                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}
