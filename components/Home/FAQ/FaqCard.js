import React from "react";
import {
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/core";
import {AddIcon, MinusIcon} from "@chakra-ui/icons";

const FaqCard = ({question, answer}) => {
  return (
    <Box>
      <Accordion allowToggle>
        <AccordionItem>
          {({isExpanded}) => (
            <>
              <AccordionButton bg="gray.700" mb={{md: 2}} _hover="false">
                <Box
                  flex="1"
                  textAlign="left"
                  py="2"
                  fontSize="3xl"
                  fontWeight="semi-bold"
                  color="white"
                >
                  {question}
                </Box>
                {isExpanded ? (
                  <MinusIcon fontSize="24px" color="white" />
                ) : (
                  <AddIcon fontSize="24px" color="white" />
                )}
              </AccordionButton>
              <AccordionPanel
                p={{md: 6}}
                color="white"
                fontSize="2xl"
                bg="gray.700"
                mb={{md: 6}}
              >
                {answer}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FaqCard;
