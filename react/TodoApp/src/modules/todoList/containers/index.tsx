import React, { useEffect, useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Button } from '@rneui/themed';
import { Tab, TabView } from '@rneui/themed';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { Todo, getTodoList } from 'modules';
import TodoListItem from 'modules/todoList/components/TodoListItem';

// TODO:navigationの型定義
type HomeScreenProps = {
  navigation: any;
};

const HomeScreen = (props: HomeScreenProps) => {
  const { navigation } = props;
  const inCompleteTodoList = useAppSelector(
    (state) => state.global.inCompleteTodoList
  );
  const completeTodoList = useAppSelector(
    (state) => state.global.completeTodoList
  );
  const todoList = useAppSelector((state) => state.global.todoList);

  const dispatch = useAppDispatch();
  const [index, setIndex] = React.useState(0);

  console.log('### home todoList = ', todoList);

  useEffect(() => {
    // 起動時にTODOリスト取得数
    dispatch(getTodoList());
  }, [dispatch]);

  const renderItem = useCallback(({ item }: { item: Todo }) => {
    return <TodoListItem todoItem={item} />;
  }, []);

  return (
    <>
      <Button
        title="Go to Jane's profile  cccc"
        onPress={() => {
          navigation.navigate('Profile', { name: 'Jane' });
        }}
        type="outline"
      />

      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={styles.tabIndicatorStyle}
        variant="primary"
      >
        <Tab.Item title="未完了" />
        <Tab.Item title="完了" />
        <Tab.Item title="全て" />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.tabViewItem}>
          <FlatList
            data={inCompleteTodoList}
            renderItem={renderItem}
            keyExtractor={(item: Todo) => String(item.id)}
          />
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <FlatList
            data={completeTodoList}
            renderItem={renderItem}
            keyExtractor={(item: Todo) => String(item.id)}
          />
        </TabView.Item>
        <TabView.Item style={styles.tabViewItem}>
          <FlatList
            data={todoList}
            renderItem={renderItem}
            keyExtractor={(item: Todo) => String(item.id)}
          />
        </TabView.Item>
      </TabView>
    </>
  );
};

const styles = StyleSheet.create({
  tabIndicatorStyle: {
    backgroundColor: 'black',
    height: 5,
  },
  tabViewItem: {
    width: '100%',
  },
});

export default HomeScreen;