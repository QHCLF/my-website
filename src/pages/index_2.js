import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { layout } from '@components';
import styled from 'styled-components';
import {mixins, Main } from '@styles';

const MainContainer = styled(Main)`
${mixins.sidePadding};
counter-reset: section
`