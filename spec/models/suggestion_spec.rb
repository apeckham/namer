require 'spec_helper'

describe Suggestion do
  it { should belong_to(:survey) }
end
