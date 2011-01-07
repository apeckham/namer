require 'spec_helper'

describe Survey do
  before(:each) do
    @valid_attributes = {
      
    }
  end

  it "should create a new instance given valid attributes" do
    Survey.create!(@valid_attributes)
  end

  it "should generate to_param when created" do
    survey = Survey.create!
    survey.reload.to_param.should =~ /^[a-z0-9]{20}$/
  end

  it "should have multiple suggestions" do
    survey = Survey.create!
    survey.suggestions.create!(:name => "what.cha.ma.call.it")
    survey.suggestions.map(&:name).should == ["what.cha.ma.call.it"]
  end
end
