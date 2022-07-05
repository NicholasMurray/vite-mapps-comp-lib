import React from 'react';
import { Accordion } from './Accordion';
import { defaultAccordionData,expandedAccordionData, summaryAccordionData } from './test-data/';

export default {
  title: 'Content presentation/Accordion',
  component: Accordion,
};

const Template = () => 
  <Accordion id={defaultAccordionData.id} items={defaultAccordionData.items} />;
export const Default = Template.bind({});
Default.args = {};

const SummaryTemplate = () => 
  <Accordion id={summaryAccordionData.id} items={summaryAccordionData.items} />;
export const Summary = SummaryTemplate.bind({});

const DefaultExpandedAccordionTemplate = () => 
  <Accordion id={expandedAccordionData.id} items={expandedAccordionData.items} />;
export const DefaultExpandedAccordion = DefaultExpandedAccordionTemplate.bind({});

const PlusMinusAccordionTemplate = () => 
  <Accordion id={defaultAccordionData.id} items={defaultAccordionData.items} variant="PlusMinus" />;
export const PlusMinusAccordion = PlusMinusAccordionTemplate.bind({});
