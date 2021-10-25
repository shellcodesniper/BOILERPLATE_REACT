import { useSelector, useDispatch } from 'react-redux';
import { increaseCountAction } from '@redux/counter';
import { IRootState } from '@root/src/Reducer';

const Counter = (): JSX.Element => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: IRootState) => state.counter);
  const increse = () => {
    dispatch(increaseCountAction(count + 1));
  };
  return (
    <div>
      {count}
      <button onClick={increse}>증가</button>
    </div>
  );
};

export default Counter;
