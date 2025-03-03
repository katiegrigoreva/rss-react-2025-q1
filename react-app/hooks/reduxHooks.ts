import { useSelector } from 'react-redux';
import type { RootState } from '../src/store';

export const useAppSelector = useSelector.withTypes<RootState>();
