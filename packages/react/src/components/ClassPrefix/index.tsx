/**
 * Copyright IBM Corp. 2016, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PropTypes from 'prop-types';
import React, { PropsWithChildren } from 'react';
import { PrefixContext } from '../../internal/usePrefix';

export interface ClassPrefixProps {
  /**
   *   The value used to prefix the CSS selectors
   *   used by Carbon components.
   */
  prefix: string;
}

function ClassPrefix({
  children,
  prefix,
}: PropsWithChildren<ClassPrefixProps>) {
  return (
    <PrefixContext.Provider value={prefix}>{children}</PrefixContext.Provider>
  );
}

ClassPrefix.propTypes = {
  children: PropTypes.node,

  /**
   * The value used to prefix the CSS selectors used by Carbon components
   */
  prefix: PropTypes.string.isRequired,
};

export { ClassPrefix };
