/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';

import classNames from 'classnames';

import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

import './data_panel.scss';

interface Props {
  title: React.ReactElement; // e.g., h2 tag
  subtitle?: string;
  iconType?: string;
  action?: React.ReactNode;
  filled?: boolean;
  className?: string;
}

export const DataPanel: React.FC<Props> = ({
  title,
  subtitle,
  iconType,
  action,
  filled,
  className,
  children,
  ...props // e.g., data-test-subj
}) => {
  const classes = classNames('dataPanel', className, {
    'dataPanel--filled': filled,
  });

  return (
    <EuiPanel {...props} color={filled ? 'subdued' : 'plain'} className={classes} hasShadow={false}>
      <EuiFlexGroup justifyContent="spaceBetween" alignItems="center" responsive={false}>
        <EuiFlexItem>
          <EuiFlexGroup>
            {iconType && (
              <EuiFlexItem>
                <EuiIcon type={iconType} />
              </EuiFlexItem>
            )}
            <EuiFlexItem>
              <EuiTitle size="xs">{title}</EuiTitle>
              {subtitle && (
                <EuiText size="s" color="subdued">
                  <p>{subtitle}</p>
                </EuiText>
              )}
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
        {action && <EuiFlexItem grow={false}>{action}</EuiFlexItem>}
      </EuiFlexGroup>
      <EuiSpacer />
      {children}
    </EuiPanel>
  );
};
