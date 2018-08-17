/*
 * Copyright 2017-2018 Allegro.pl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Colors } from "../../models/colors/colors";
import { DataCube } from "../../models/data-cube/data-cube";
import { Splits } from "../../models/splits/splits";
import { RulesEvaluator } from "./rules-evaluator";
import { Action, Predicate, RulesEvaluatorBuilder, RulesEvaluatorBuilderEmpty } from "./rules-evaluator-builder";

export interface PredicateVariables {
  dataCube?: DataCube;
  splits: Splits;
}

export interface ActionVariables {
  dataCube?: DataCube;
  splits?: Splits;
  colors?: Colors;
  isSelectedVisualization?: boolean;
}

export type VisualizationDependentPredicate = Predicate<PredicateVariables>;
export type VisualizationDependentAction = Action<ActionVariables>;

export type VisualizationDependentEvaluator = RulesEvaluator<PredicateVariables, ActionVariables>;

export const visualizationDependentEvaluatorBuilder: RulesEvaluatorBuilderEmpty<PredicateVariables, ActionVariables> = RulesEvaluatorBuilder.empty();
