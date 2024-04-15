import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import * as statementsActions from "../store/slices/statements/statements.actions";
import * as statementMakingActions from "../store/slices/statement-making/statement-making.actions";

const rootActions = {
  ...statementsActions,
  ...statementMakingActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
