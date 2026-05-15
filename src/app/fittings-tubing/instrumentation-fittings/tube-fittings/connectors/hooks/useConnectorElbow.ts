import { useQuery } from "@tanstack/react-query"
import {
  getConnectorElbows,
  getConnectorElbowFilterOptions,
  type ConnectorElbowFilterParams,
} from "@/src/api/connectorElbowApi"


const clean = (filters: Record<string, any>) =>
  Object.fromEntries(
    Object.entries(filters).filter(
      ([_, v]) => v !== null && v !== undefined && (!Array.isArray(v) || v.length > 0)
    )
  )

export const useConnectorElbowFilterOptions = () =>
  useQuery({
    queryKey: ["connector-elbow-filters"],
    queryFn: getConnectorElbowFilterOptions,
    staleTime: Infinity,
  })

export const useConnectorElbows = (filters: ConnectorElbowFilterParams) =>
  useQuery({
    queryKey: ["connector-elbows", clean(filters)],
    queryFn: () => getConnectorElbows(clean(filters) as ConnectorElbowFilterParams),
    staleTime: 1000 * 60 * 5,
    placeholderData: prev => prev,
  })